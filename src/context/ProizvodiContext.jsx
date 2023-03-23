import React from "react";
import { useState } from 'react';
import { createContext } from 'react'
import {PROIZVODI} from '../proizvodi';

export const ProizvodiContext = createContext(null);

export const ProizvodiContextProvider = (props) => {

    const getDefaultKorpa = () => {
        let korpa = {}
        for (let i = 1; i < PROIZVODI.length + 1; i++) {
            korpa[i] = 0;
        }
        return korpa;
    };

    const [korpaItems, setKorpaItems] = useState(getDefaultKorpa());

    const ukupnoZaPlacanje = () => {
        let ukupno = 0;
        for (const item in korpaItems) {
            if (korpaItems[item] > 0) {
                let cenaP = PROIZVODI.find((product) => product.id === Number(item));    // vraca ceo proizvod ciji je id = item
                ukupno = ukupno + korpaItems[item] * cenaP.cena;           // kolicina proizvoda * cena
            }
        }
        return ukupno;
    };

    const dodajUKorpu = (proizvodId) => {
        setKorpaItems((prev) => ({ ...prev, [proizvodId]: prev[proizvodId] + 1 }))
    };

    const izbrisiIzKorpe = (proizvodId) => {
        setKorpaItems((prev) => ({ ...prev, [proizvodId]: prev[proizvodId] - 1 }))

    }

    const resetKorpa = () => {
        setKorpaItems({});
      };

    const contextValue ={
        korpaItems, 
        dodajUKorpu, 
        izbrisiIzKorpe,
        ukupnoZaPlacanje,
        resetKorpa,
        
    };
    return (
        <ProizvodiContext.Provider value = {contextValue}>{props.children}</ProizvodiContext.Provider>
    )
}