import { useReducer, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Global from "./styles/global";
import ConfirmContext from "./utils/ConfirmContext"
import BookingContext from "./utils/BookingContext";
import ServiceCreatedContext from "./utils/ServiceCreatedContext";
import Home from "./pages/home";
import About from "./pages/about";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";
import UserDetails from "./pages/user-details";
import MakeBooking from "./pages/make-booking";
import ConfirmBooking from "./pages/confirm-booking";
import Admin from "./pages/admin";
import AdminOptionCreate from "./pages/admin-option-create";
import api from "./config/api";
import {StateContext} from './utils/StateContext';
import StateReducer from './utils/StateReducer'
import Nav from './components/navbar'
import Booking from "./pages/booking";

function App() {
  const [services, setServices] = useState([])
  const [confirmContext, setConfirmContext] = useState([]);
  const [bookingContext, setBookingContext] = useState([]);
  const [serviceCreatedContext, setserviceCreatedContext] = useState([]);

  const initialState = {
    userSignedIn: sessionStorage.getItem("user")  || (""),
    auth: {token:sessionStorage.getItem("token")  || ("")}
  }
  const [store, dispatch] = useReducer(StateReducer, initialState)
  

  useEffect(() => {
    async function fetchData() {
      const data = await api.getOptions();
      if (data) {
        setServices(data);
      }
    }
    fetchData();
  }, [serviceCreatedContext]);


  return (
    <>
    <Global />
      <StateContext.Provider value={{store,dispatch}}>
        <ConfirmContext.Provider value={{confirmContext, setConfirmContext}}>
          <BookingContext.Provider value={{bookingContext, setBookingContext}}>
            <ServiceCreatedContext.Provider value={{serviceCreatedContext, setserviceCreatedContext}}>
              <BrowserRouter>
                <Nav />
                <Routes>
                  <Route path="/" element={<About />} />
                  <Route path="/services" element={<Home services={services} />} />
                  <Route path="/sign_in" element={<SignIn />} />
                  <Route path="/sign_up" element={<SignUp />} />
                  <Route path="/user_details" element={<UserDetails />} />
                  <Route path="/make_booking" element={<MakeBooking services={services}/>} />
                  <Route path="/confirm_booking" element={<ConfirmBooking />} />
                  <Route path="/admin" element={<Admin />} />
                  <Route path="/admin_option_create" element={<AdminOptionCreate />} />
                  <Route path="/booking" element={<Booking />} />
                </Routes>
              </BrowserRouter>
            </ServiceCreatedContext.Provider>
          </BookingContext.Provider>
        </ConfirmContext.Provider>
      </StateContext.Provider>
    </>
  )
}

export default App
