import React from "react";
import './bootstrap.min.css';
import "./Layout.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div id="main-wrapper">
            <Header />
            {/* <Dashboard /> */}
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
