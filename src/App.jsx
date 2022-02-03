import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Context from "./context/context"
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
  const [context, setContext] = useState({})
  const [services, setServices] = useState([])

    useEffect(async () => {
        const data = await api.getOptions();
            if (data) {
                console.log("services", data);
                setServices(data);
            }
    }, []);

  return (
    <Context.Provider value={{context, setContext}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign_in" element={<SignIn />} />
          <Route path="/sign_up" element={<SignUp />} />
          <Route path="/user_details" element={<UserDetails />} />
          <Route path="/options" element={<OptionPage services={services}/>} />
          <Route path="/make_booking" element={<MakeBooking />} />
          <Route path="/confirm_booking" element={<ConfirmBooking />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  )
}

export default App
