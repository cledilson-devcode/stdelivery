

import Orders from "./Orders";
import Home from "./Home";
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Navbar from "./Navbar";



function Routess() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/orders" element={<Orders />} />
                <Route path="/" element={<Home />} />

            </Routes>
        </BrowserRouter>
    );
}

export default Routess;