import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/login";
import MakeBooking from "./pages/make_booking";
import ConfirmBooking from "./pages/confirm_booking";
import Admin from "./pages/admin";

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/make_booking" element={<MakeBooking />} />
        <Route path="/confirm_booking" element={<ConfirmBooking />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
