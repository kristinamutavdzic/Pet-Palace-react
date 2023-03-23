import React from "react";
import {Link} from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./navbar.css";
import {MdPets} from "react-icons/md"

export const Navbar = () => {
    return <div className="navbar">
        <div className="Links">
        <Link style={{fontSize:"40px", pointerEvents: 'none', }}> <MdPets></MdPets> PET PALACE </Link>
        <Link to ="/"> Prodavnica </Link>
        <Link to='/onama'>O nama</Link>
        <Link to="/cart"><ShoppingCartIcon /> </Link>
        </div>
    </div>;
};