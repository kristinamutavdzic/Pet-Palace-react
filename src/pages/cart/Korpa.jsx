import React, { useContext } from "react";
import {PROIZVODI} from "../../proizvodi";
import { ProizvodiContext } from "../../context/ProizvodiContext";
import {KorpaItem} from './korpa-item';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import "./korpa.css"

export const Cart = () => {
    //za cuvanje stanja poruke
    const [showMessage, setShowMessage] = useState(false);
    //funkcija za ispis poruke i porucivanje proizvoda
    const poruka = (event) => {
        event.preventDefault();
        setShowMessage(true);
        alert("Uspesno ste porucili proizvode.");
        window.location.reload();
        return false;
      };
      //kolicina i ukupno za placanje
      const{korpaItems,ukupnoZaPlacanje}=useContext(ProizvodiContext);

      const ukupno = ukupnoZaPlacanje();

      const navigate = useNavigate();



    return (
        <div className="korpa">
        <div><h1 className="naslov"> Dodati proizvodi u korpi </h1></div>

        <div className="korpaItems">
        {/* mapira proizvode iz korpe ukoliko ih ima*/}
        {PROIZVODI.map((product)=> {
        if(korpaItems[product.id]!=0){
            return <KorpaItem data={product}/>
        }

        })}
        </div>

        {ukupno > 0 
                ?
                <div className="korpaCheckout" >
                <p className="ukupno">Ukupno: {ukupno}din</p>
                <button className = "nastavi" onClick={() => navigate("/")}>Nastavi sa kupovinom</button>
                <button className="placanje"  onClick={(event) => poruka(event)}>Plaćanje</button>
                {showMessage}
                </div>
                : 
                <h1 className="prazna">Vaša korpa je prazna.</h1>}

        </div>
    )
}