import React from "react";
import { Routes, Route } from "react-router-dom";
import Car from "../components/Car-pages/Car";
import Singlecar from "../components/Car-pages/Singlecar";
import SignUp from "../components/Login/signup/SignUp";
import Login from "../components/Login/Login/Login";
import HomePage from "../components/HomeFolder/HomePage";
import MyAccount from "../pages/MyAccount";
import OwnerPage from "../components/OwnerPages/OwnerPage/OwnerPage";
import CarLeaseForm from "../components/OwnerPages/CreateCarPage/CreateCar";
import OSingleCar from "../components/OwnerPages/OwnerSingleCarPages/OSingleCar";
import OSignUp from "../components/OwnerPages/SignUp/OSignUp";
import BookingsCars from "../components/Car-pages/BookingCars/BookingCars";
const AllRoutes = () => {
  return (
    <div>
      <Routes> 
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/car/:location" element={<Car />}></Route>
        <Route path="/owner/:owner_id" element={<OwnerPage/>}></Route> 
        <Route path="/createCar" element={<CarLeaseForm/>}></Route>
        <Route path="/owner/car/:car_id" element={<OSingleCar/>}></Route> 
        <Route path="owner/signup" element={<OSignUp/>}></Route>
        <Route path="user/bookings" element={<BookingsCars/>}></Route>
        <Route
          path="/car/singlecar/:car_id" 
          element={
              <Singlecar /> 
          }   
        ></Route>
        <Route
          path="/myaccount"
          element={
              <MyAccount />
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
