import { useNavigate } from "react-router-dom";

import { 
  NavBox, 
  NavLinkWords,
  ButtonSignOut,
  UserText
 } from "./Styled";
import { useGlobalState } from "../utils/StateContext";

const Nav = () => {
  const navigate = useNavigate();
  const { store, dispatch } = useGlobalState();
  const { userSignedIn } = store;

  function handleSignOut(event) {
    event.preventDefault();
    dispatch({ type: "setUserSignedIn", data: "" });
    dispatch({ type: "setToken", data: "" });
    sessionStorage.setItem("token", "");
    sessionStorage.setItem("user", "");
    navigate("/");
  }

  return (
    <NavBox>
      {userSignedIn != "" && (
        <UserText>
          Welcome: {userSignedIn}
        </UserText>
      )}
      {userSignedIn === "admin" && (
        <>
          <NavLinkWords to="/admin">Admin Page</NavLinkWords>
          <NavLinkWords to="/admin_option_create">Create Option</NavLinkWords>
        </>
      )}
      <NavLinkWords to="/">Home</NavLinkWords>
      {userSignedIn ? (
        <>
          <ButtonSignOut onClick={handleSignOut} style={{ margin: "5px" }}>
            Sign Out
          </ButtonSignOut>
        </>
      ) : (
        <>
          <NavLinkWords to="/sign_up">Sign Up</NavLinkWords>
          <NavLinkWords to="/sign_in">Sign In</NavLinkWords>
        </>
      )}
    </NavBox>
  );
};

export default Nav;
