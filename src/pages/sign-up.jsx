import { useState } from "react"
import { useNavigate } from "react-router-dom"

import api from "../config/api";
import {useGlobalState} from '../utils/StateContext'
import { SignTitle, ErrorMessage, SignForm, SignButton, BackgroundImage } from '../components/Styled'

const SignUp = () => {
  const navigate = useNavigate()

  const [usernameError, setUsernameError] = useState("")
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")

  const [data, setData] = useState({
      username: "",
      email: "",
      password: "",
      password_confirmation: ""
  });
  const {dispatch} = useGlobalState()

  const handleChange = (e) => {
    const target = e.target;
        setData({ 
            ...data,
            [target.name]: target.value
        });
  };

  const handleSubmit = async (event) => {
      event.preventDefault()
      const userData = {
          username: data.username,
          email: data.email,
          password: data.password,
          password_confirmation: data.password_confirmation
      };
      const user = await api.signUp(userData);
      if (!user.jwt) {
        { user.username ? setUsernameError(user.username[0]) : setUsernameError("") } 
        { user.email ? setEmailError(user.email[0]) : setEmailError("")}
        { user.password_confirmation ? setPasswordError(user.password_confirmation[0]) : setPasswordError("")} 
      } else {
      dispatch({type: 'setToken', data: user.jwt});
      dispatch({type: 'setUserSignedIn', data: user.username})

      sessionStorage.setItem("token", user.jwt)
      sessionStorage.setItem("user", user.username)
      navigate("/user_details")
      }
  };

  return (
    <BackgroundImage>
      <SignTitle>Sign-up page </SignTitle>
      { usernameError ? <> <ErrorMessage>Error: Username {usernameError}</ErrorMessage> </> : <> </> } 
      { emailError ? <> <ErrorMessage>Error: Email {emailError}</ErrorMessage> </> : <> </> }
      { passwordError ? <> <ErrorMessage>Error: Password Confirmation {passwordError}</ErrorMessage> </> : <> </> }
      <SignForm onSubmit={handleSubmit}>
        <div style={{padding:"10px"}}>
          <label htmlFor="username">Username:</label>
          <br></br>
          <input type="text" name="username" id="username" value={data.username} onChange={handleChange}  />
        </div>

        <div style={{padding:"10px"}}>
          <label htmlFor="email">Email:</label>
          <br></br>
          <input type="email" name="email" id="email" value={data.email} onChange={handleChange} />
        </div>

        <div style={{padding:"10px"}}>
          <label htmlFor="password">Password:</label>
          <br></br>
          <input type="password" name="password" id="password" value={data.password} onChange={handleChange} />
        </div>

        <div style={{padding:"10px"}}>
          <label htmlFor="password_confirmation">Password Confirmation:</label>
          <br></br>
          <input type="password" name="password_confirmation" id="password_confirmation" value={data.password_confirmation} onChange={handleChange} />
        </div>
        
        <SignButton>
           <button type="submit" style={{margin: "10px"}}>Sign Up</button>
        </SignButton>
      </SignForm>
    </BackgroundImage>
  );
};

export default SignUp;
