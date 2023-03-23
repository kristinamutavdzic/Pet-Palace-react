import React, { useContext } from 'react';
import { ProizvodiContext } from '../../context/ProizvodiContext';

export const KorpaItem=(props)=>{
    const{id,naziv,cena,slika}=props.data;
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
            <button className="kolicinaPlus" onClick={() => izbrisiIzKorpe(id)}> - </button>
                <input className = "kolicinaInput" value={korpaItems[id]} />
            <button className="kolicinaPlus" onClick={() => dodajUKorpu(id)}> + </button>
            </div>

            </div>
    </div>
};