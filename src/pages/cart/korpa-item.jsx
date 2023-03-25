import React, { useContext } from 'react';
import { ProizvodiContext } from '../../context/ProizvodiContext';

export const KorpaItem=(props)=>{
    //props su atributi 
    const{id,naziv,cena,slika}=props.data;
    //funkcije koje nam trebaju iz konteksta
    const { korpaItems, dodajUKorpu, izbrisiIzKorpe } = useContext(ProizvodiContext);


    return <div className="korpaItem">
            <img src={slika}/>
            <div className="opis">
                <p>
                    <b>{naziv}
                    </b>
                </p>
                <p> {cena}din</p>
            <div className="kolicinaHandler">
                {/* za smanjivanje kolicine*/}
            <button className="kolicinaPlus" onClick={() => izbrisiIzKorpe(id)}> - </button>
            {/*moze se menjati kolicina preko input polja*/}
                <input className = "kolicinaInput" value={korpaItems[id]} />
                {/* za povecanje kolicine*/}
            <button className="kolicinaPlus" onClick={() => dodajUKorpu(id)}> + </button>
            </div>

            </div>
    </div>
};