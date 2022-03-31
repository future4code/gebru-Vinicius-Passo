import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminHomePage from "../Pages/AdminHomePage";
import ApplicationFormPage from "../Pages/ApplicationFormPage";
import CreateTripPage from "../Pages/CreateTripPage";
import ErroPage from "../Pages/ErroPage";
import HomePage from "../Pages/HomePage";
import ListTripsPage from "../Pages/ListTripsPage";
import LoginPage from "../Pages/LoginPage";
import TripDetailsPage from "../Pages/TripDetailsPage";

export const Router = () => {
    return(
    <BrowserRouter >
     <Routes>
         <Route index element={<HomePage /> } />
         <Route path="login" element={<LoginPage /> } />
         <Route path="viagens" element={<ListTripsPage /> } />
         <Route path="inscreva-se" element={<ApplicationFormPage /> } />
         <Route path="admin" element={<AdminHomePage /> } />
         <Route path="detailPage" element={<TripDetailsPage /> } />
         <Route path="create" element={<CreateTripPage /> } />
         <Route path="*" element={<ErroPage /> } />
         

     </Routes>
    </BrowserRouter>
    )
}