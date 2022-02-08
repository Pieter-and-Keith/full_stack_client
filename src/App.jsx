import { useReducer, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ConfirmContext from "./utils/ConfirmContext"
import Home from "./pages/home";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";
import UserDetails from "./pages/user-details";
import OptionPage from "./pages/options";
import MakeBooking from "./pages/make-booking";
import ConfirmBooking from "./pages/confirm-booking";
import Admin from "./pages/admin";
import AdminOptionCreate from "./pages/admin-option-create";
import api from "./config/api";
import {StateContext} from './utils/StateContext';
import StateReducer from './utils/StateReducer'
import Nav from './components/navbar'

function App() {
  const [services, setServices] = useState([])
  const [confirmContext, setConfirmContext] = useState([]);
  console.log(confirmContext)
  
  const initialState = {
    userSignedIn: sessionStorage.getItem("user") || null,
    auth: {token:sessionStorage.getItem("token") || null}
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
  }, []);


  return (
    <StateContext.Provider value={{store,dispatch}}>
      <ConfirmContext.Provider value={{confirmContext, setConfirmContext}}>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home services={services} />} />
            <Route path="/sign_in" element={<SignIn />} />
            <Route path="/sign_up" element={<SignUp />} />
            <Route path="/user_details" element={<UserDetails />} />
            <Route path="/options" element={<OptionPage services={services}/>} />
            <Route path="/make_booking" element={<MakeBooking services={services}/>} />
            <Route path="/confirm_booking" element={<ConfirmBooking confirmContext={confirmContext}/>} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin_option_create" element={<AdminOptionCreate />} />
          </Routes>
        </BrowserRouter>
      </ConfirmContext.Provider>
    </StateContext.Provider>
  )
}

export default App
