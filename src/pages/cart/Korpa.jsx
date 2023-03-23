import React, { useContext } from "react";
import {PROIZVODI} from "../../proizvodi";
import { ProizvodiContext } from "../../context/ProizvodiContext";
import {KorpaItem} from './korpa-item';
import "./korpa.css"

export const Cart = () => {
    const{korpaItems}=useContext(ProizvodiContext);
    return (
        <div className="korpa">
        <div><h1 className="naslov"> Dodati proizvodi u korpi </h1></div>

        <div className="korpaItems">
        {PROIZVODI.map((product)=> {
        if(korpaItems[product.id]!=0){
            return <KorpaItem data={product}/>
        }

        })}
        </div>

        </div>
    )
}