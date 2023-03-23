import React, { useContext } from "react";
import {ProizvodiContext} from "../../context/ProizvodiContext";

export const Product = (props) => {

    const {id,naziv,cena,slika}=props.data;
    const {dodajUKorpu,korpaItems}=useContext(ProizvodiContext);
    const korpaItemAmount = korpaItems[id];
    
    return (

        <div className="razmak">
        <div className="product"> 
            <img src={slika}/>
            <div className="opis">
                <p> <b>
                    {naziv}</b>
                    </p>
                    <p className="cena">
                        {cena}din
                    </p>
        </div>
        <button className="dodajbtn" onClick={()=> dodajUKorpu(id)}> 
        Dodaj u korpu {korpaItemAmount>0 && <> ({korpaItemAmount})</>} </button>
        </div>
    </div>

    );
};