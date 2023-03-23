import React from "react";

export const Product = (props) => {

    const {id,naziv,cena,slika}=props.data;
    
    return (

    <div className="product"> 
    <img src={slika}/>
        <div className="opis">
            <p> <b> {naziv} </b> </p>
            <p> {cena}din </p>
        </div>
    </div>

    );
};