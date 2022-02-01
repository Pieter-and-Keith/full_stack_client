import { useContext } from "react"
import { useNavigate } from "react-router-dom"

import Context from "../context/context"
import Nav from "../components/navbar";

const SignUp = () => {

    const { setContext } = useContext(Context)
    const navigate = useNavigate()

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const passwordConfirm = event.target.passwordConfirm.value;

    console.log("username: ", username);
    console.log("email: ", email);
    console.log("password: ", password);
    console.log("password confirm: ", passwordConfirm);

    const options = {
        method:"POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify({  "username":username,
                                "email": email,
                                "password": password,
                                "password_confirmation": passwordConfirm
                            })
    }
    const signUpResponse = await fetch("api/auth/sign_up", options)
    const user = await signUpResponse.json()
    console.log(user)
    setContext({ user })
    navigate("/user_details")
  };

  return (
    <>
      <Nav />
      <h1>Sign Up page </h1>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="username">username:</label>
        <input type="text" name="username" />
        <label htmlFor="email">email:</label>
        <input type="text" name="email" />
        <label htmlFor="password">Password</label>
        <input type="text" name="password" />
        <label htmlFor="passwordConfirm">Password Confirmation</label>
        <input type="text" name="passwordConfirm" />
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
};

export default SignUp;
