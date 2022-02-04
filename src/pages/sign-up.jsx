import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import SignInContext from "../context/SignInContext"
import Nav from "../components/navbar";
import api from "../config/api";

const SignUp = (props) => {
  const { setSignInContext } = useContext(SignInContext)
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate()

  useEffect(() => {
    // issues
    if (!setSignInContext?.user?.email) {
      setErrorMessage("The email is already registered, please sign-up with another email.")
    }
  }, [])

  const [data, setData] = useState({
      username: "",
      email: "",
      password: "",
      password_confirmation: ""
  });

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
      if (user) {
          props.setUserSignedIn(true)
          setSignInContext({user})
      }
      navigate("/")
  };

  // METHOD 1:
  // const handleOnSubmit = async (event) => {
  //   event.preventDefault();
  //   const username = event.target.username.value;
  //   const email = event.target.email.value;
  //   const password = event.target.password.value;
  //   const passwordConfirm = event.target.passwordConfirm.value;


  //   console.log("username: ", username);
  //   console.log("email: ", email);
  //   console.log("password: ", password);
  //   console.log("password confirm: ", passwordConfirm);

  //   const options = {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json;charset=UTF-8"
  //     },
  //     body: JSON.stringify({
  //       "username": username,
  //       "email": email,
  //       "password": password,
  //       "password_confirmation": passwordConfirm
  //     })
  //   }

  //   const signUpResponse = await fetch("api/auth/sign_up", options)
  //   const user = await signUpResponse.json()
  //   console.log(user)
  //   setSignInContext({ user })
  //   navigate("/user_details")
  // };

  return (
    <>
      <h1>Sign-up page </h1>
      {/* {errorMessage && <p className="error"> {errorMessage} </p> } */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" name="username" value={data.username} onChange={handleChange}  />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" value={data.email} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" value={data.password} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password_confirmation">Password Confirmation:</label>
          <input type="password" name="password_confirmation" value={data.password_confirmation} onChange={handleChange} />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
};

export default SignUp;
