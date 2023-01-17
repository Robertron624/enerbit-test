import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import LoginPage from "./pages/LoginPage/LoginPage";
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<LoginPage />}></Route>
                <Route path="/dashboard" element={<Dashboard />}></Route>
            </Routes>
            <ToastContainer/>
        </div>
    );
}

export default App;
