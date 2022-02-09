import { useState } from "react"
import { useNavigate } from "react-router-dom"

import api from "../config/api";
import {useGlobalState} from '../utils/StateContext'

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
        setUsernameError(user.username[0])
        setEmailError(user.email[0])
        setPasswordError(user.password_confirmation[0])
      } else {
      console.log(user)
      dispatch({type: 'setToken', data: user.jwt});
      dispatch({type: 'setUserSignedIn', data: user.username})

      sessionStorage.setItem("token", user.jwt)
      sessionStorage.setItem("user", user.username)
      navigate("/user_details")
      }
  };

  return (
    <>
      <h1>Sign-up page </h1>
      { usernameError ? <> <h3>Error: Username {usernameError}</h3> </> : <> </> } 
      { emailError ? <> <h3>Error: Email {emailError}</h3> </> : <> </> }
      { passwordError ? <> <h3>Error: Password Confirmation {passwordError}</h3> </> : <> </> }
      <form onSubmit={handleSubmit}>
        <div style={{padding:"10px"}}>
          <label htmlFor="username">Username:</label>
          <input type="text" name="username" value={data.username} onChange={handleChange}  />
        </div>

        <div style={{padding:"10px"}}>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" value={data.email} onChange={handleChange} />
        </div>

        <div style={{padding:"10px"}}>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" value={data.password} onChange={handleChange} />
        </div>

        <div style={{padding:"10px"}}>
          <label htmlFor="password_confirmation">Password Confirmation:</label>
          <input type="password" name="password_confirmation" value={data.password_confirmation} onChange={handleChange} />
        </div>
        
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
};

export default SignUp;
