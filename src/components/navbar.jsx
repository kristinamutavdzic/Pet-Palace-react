import React from "react";
import {Link} from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./navbar.css";

export const Navbar = () => {
    return <div className="navbar">
        <div className="Links">
<Link to ="/"> Prodavnica </Link>
<Link to="/cart"><ShoppingCartIcon /> </Link>
        </div>
    </div>;
};