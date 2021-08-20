import React from "react";
import { Link } from "react-router-dom";

// images
import Logo from "../images/xerox-logo.svg";

// styles
import "../styles/nav-footer.css";

const Navigation = () => {
    return (
        <div className="navigation-container sticky">
            <Link to="/" id="nav-logo">
                <img src={Logo} alt="Xerox company logo in red." />
            </Link>
        </div>
    );
};

export default Navigation;
