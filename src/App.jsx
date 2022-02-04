import { useContext, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


import LoginContext from "./context/SignInContext"
import Home from "./pages/home";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";
import UserDetails from "./pages/user-details";
import OptionPage from "./pages/options";
import MakeBooking from "./pages/make-booking";
import ConfirmBooking from "./pages/confirm-booking";
import Admin from "./pages/admin";
import api from "./config/api";


function App() {
  const [loginContext, setLoginContext] = useState({})
  const [services, setServices] = useState([])
  const [userSignedIn, setUserSignedIn] = useState(false)

    useEffect(async () => {
        const data = await api.getOptions();
            if (data) {
                console.log("services", data);
                setServices(data);
            }
    }, []);

  return (
    <LoginContext.Provider value={{loginContext, setLoginContext}}>
      <BrowserRouter>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/sign_up">Sign Up</Link>
            <Link to="/options">Options</Link>
            { !userSignedIn ? <Link to="/sign_in">Sign In</Link> : <button onClick={() => setUserSignedIn(false)}>Logout</button> }
        </nav>
        <Routes>
          <Route path="/" element={<Home services={services} userSignedIn={userSignedIn}/>} />
          <Route path="/sign_in" element={<SignIn setUserSignedIn={setUserSignedIn}/>} />
          <Route path="/sign_up" element={<SignUp />} />
          <Route path="/user_details" element={<UserDetails />} />
          <Route path="/options" element={<OptionPage services={services}/>} />
          <Route path="/make_booking" element={<MakeBooking />} />
          <Route path="/confirm_booking" element={<ConfirmBooking />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </LoginContext.Provider>
  )
}

export default App
