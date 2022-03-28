import { useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../config/api";
import {
  SignTitle,
  SignForm,
  ErrorMessage,
  LinkE,
  SignButton,
  BackgroundImage,
  Button
} from "../components/Styled";
import { useGlobalState } from "../utils/StateContext";

const SignIn = () => {
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const { dispatch } = useGlobalState();

  const handleChange = (e) => {
    const target = e.target;
    setData({
      ...data,
      [target.name]: target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userData = {
      email: data.email,
      password: data.password,
    };
    const user = await api.signIn(userData);
    if (!user.username) {
      setError(user);
    } else {
      dispatch({ type: "setToken", data: user.jwt });
      dispatch({ type: "setUserSignedIn", data: user.username });
      sessionStorage.setItem("token", user.jwt);
      sessionStorage.setItem("user", user.username);
      navigate("/");
    }
  };

  const handleSignUp = () => {
    navigate("/sign_up")
  }

  return (
    <BackgroundImage>
      <SignTitle>Sign In</SignTitle>
      <SignForm onSubmit={handleSubmit}>
        <div style={{ margin: "5px" }}>
          <label htmlFor="email">Email:</label>
          <br></br>
          <input
            type="email"
            name="email"
            id="email"
            value={data.email}
            onChange={handleChange}
            style={{ width: "200px" }}
          />
        </div>
        <div style={{ margin: "5px" }}>
          <label htmlFor="password">Password:</label>
          <br></br>
          <input
            type="password"
            name="password"
            id="password"
            value={data.password}
            onChange={handleChange}
            style={{ width: "200px" }}
          />
        </div>
        <SignButton>
          <Button type="submit" >
            Sign In
          </Button>
          <Button onClick={handleSignUp}>
            Sign Up
          </Button>
        </SignButton>
      </SignForm>
      {error ? (
        <>
          {" "}
          <ErrorMessage>Error: {error}</ErrorMessage>{" "}
        </>
      ) : (
        <> </>
      )}
    </BackgroundImage>
  );
};

export default SignIn;
