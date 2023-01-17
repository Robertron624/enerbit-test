import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<LoginPage />}></Route>
                <Route path="/dashboard" element={<Dashboard />}></Route>
            </Routes>
        </div>
    );
}

export default App;
