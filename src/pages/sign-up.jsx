import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import SignInContext from "../context/SignInContext"
import Nav from "../components/navbar";

const SignUp = () => {
  const { setSignInContext } = useContext(SignInContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!setSignInContext?.user?.email) {
      console.log("duplicate email")
    }
  }, [])

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
    // setContext({ user })
    navigate("/user_details")
  };

  return (
    <>
      <h1>Sign-up page </h1>
      <form onSubmit={handleOnSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" name="username" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" name="email" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="text" name="password" />
        </div>
        <div>
          <label htmlFor="passwordConfirm">Password Confirmation:</label>
          <input type="text" name="passwordConfirm" />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
};

export default SignUp;
