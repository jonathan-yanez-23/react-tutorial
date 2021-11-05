import React from "react";
import "./Navbar.css";

class Navbar extends React.Component {
    render() {
        return (
            <nav>
                <h1>WELCOME - BIENVENIDO</h1>
                <ul>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>ACCOUNT</li>
                </ul>
            </nav>
        );
    }
}


export default Navbar;