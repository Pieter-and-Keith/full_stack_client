import { useContext, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import SignInContext from "./context/SignInContext"
import UserDetailContext from "./context/UserDetailContext"
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
  const [signInContext, setSignInContext] = useState({})
  const [userDetailContext, setUserDetailContext] = useState({})
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
    <SignInContext.Provider value={{signInContext, setSignInContext}}>
      <UserDetailContext.Provider value={{userDetailContext, setUserDetailContext}}>
        <BrowserRouter>
          <nav style={{display:"flex", justifyContent:"flex-end"}}>
              <Link to="/" style={{padding:"5px"}} >Home</Link>
              { !userSignedIn && <Link to="/sign_up" style={{padding:"5px"}}>Sign-up</Link>}
              { !userSignedIn ? <Link to="/sign_in" style={{padding:"5px"}}>Sign-in</Link> : <button onClick={() => setUserSignedIn(false)} style={{padding:"5px"}}>Logout</button> }
          </nav>
          <Routes>
            <Route path="/" element={<Home services={services} userSignedIn={userSignedIn}/>} />
            <Route path="/sign_in" element={<SignIn setUserSignedIn={setUserSignedIn}/>} />
            <Route path="/sign_up" element={<SignUp setUserSignedIn={setUserSignedIn}/>} />
            <Route path="/user_details" element={<UserDetails />} />
            <Route path="/options" element={<OptionPage services={services}/>} />
            <Route path="/make_booking" element={<MakeBooking />} />
            <Route path="/confirm_booking" element={<ConfirmBooking />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </BrowserRouter>
      </UserDetailContext.Provider>
    </SignInContext.Provider>
  )
}

export default App
