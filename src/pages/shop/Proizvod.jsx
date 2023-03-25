import React, { useContext } from "react";
import {ProizvodiContext} from "../../context/ProizvodiContext";


//props su atributi proizvoda
export const Product = (props) => {

    //raspakirava se props.data i definira se id, naziv, cena i slika varijable.
    const {id,naziv,cena,slika}=props.data;
    //2 funkcije koje nam trebaju iz konteksta
    const {dodajUKorpu,korpaItems}=useContext(ProizvodiContext);
    //definise se korpaItemAmount koja predstavlja broj 
    //proizvoda s id-om koji se nalaze u korpi.
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
        {/* dugme za dodavanje proizvoda */}
        <button className="dodajbtn" onClick={()=> dodajUKorpu(id)}> 
        {/* dugme za dodavanje proizvoda, koje prikazuje narucenu kolicinu ukoliko je veca od 0 */}
        Dodaj u korpu {korpaItemAmount>0 && <> ({korpaItemAmount})</>} </button>
        </div>
    </div>

    );
};