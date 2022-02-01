import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Context from "./context/context"
import Home from "./pages/home";
import SignIn from "./pages/sign_in";
import SignUp from "./pages/sign_up";
import UserDetails from "./pages/user_details";
import MakeBooking from "./pages/make_booking";
import ConfirmBooking from "./pages/confirm_booking";
import Admin from "./pages/admin";

function App() {

  const [context, setContext] = useState({})

  return (
    <Context.Provider value={{context, setContext}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign_in" element={<SignIn />} />
          <Route path="/sign_up" element={<SignUp />} />
          <Route path="/user_details" element={<UserDetails />} />
          <Route path="/make_booking" element={<MakeBooking />} />
          <Route path="/confirm_booking" element={<ConfirmBooking />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  )
}

export default App
