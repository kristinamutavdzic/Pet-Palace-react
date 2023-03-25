import React from "react";
import { useState } from 'react';
import { createContext } from 'react'
import {PROIZVODI} from '../proizvodi';


//Context u React-u predstavlja mehanizam za deljenje podataka 
//između komponenti, bez potrebe za prosleđivanjem props-a kroz 
//svaku komponentu pojedinačno. To znači da podaci mogu biti dostupni 
//i menjanu u različitim nivoima komponente, bez potrebe da se oni 
//prosleđuju kao props. Na taj način, context olakšava upravljanje 
//stanjem aplikacije i komunikaciju između komponenti koje su 
//na različitim nivoima hijerarhije.

export const ProizvodiContext = createContext(null);

export const ProizvodiContextProvider = (props) => {

    //Kad je korpa prazna ima devet 0 u sebi
    const getDefaultKorpa = () => {
        let korpa = {}
        for (let i = 1; i < PROIZVODI.length + 1; i++) {
            korpa[i] = 0;
        }
        return korpa;
    };
    //postavljanje takve korpe kao defaultn-o stanje na pocetku
    const [korpaItems, setKorpaItems] = useState(getDefaultKorpa());

    const ukupnoZaPlacanje = () => {
        let ukupno = 0;
        for (const item in korpaItems) {
            //ako korpa nije prazna
            if (korpaItems[item] > 0) {
                // vraca ceo proizvod ciji je id = item
                let cenaP = PROIZVODI.find((product) => product.id === Number(item));  
                // kolicina proizvoda * cena, ta kolicina
                //se povecava kako prolazimo kroz niz
                //proizvoda.
                ukupno = ukupno + korpaItems[item] * cenaP.cena; 
            }
        }
        return ukupno;
    };


    //Kreiranje dodajUKorpu funkcije koja dodaje jedan proizvod u korpu.
    const dodajUKorpu = (proizvodId) => {
        setKorpaItems((prev) => ({ ...prev, [proizvodId]: prev[proizvodId] + 1 }))
    };
    //Kreiranje izbrisiIzKorpe funkcije koja uklanja jedan proizvod iz korpe.
    const izbrisiIzKorpe = (proizvodId) => {
        setKorpaItems((prev) => ({ ...prev, [proizvodId]: prev[proizvodId] - 1 }))

    }
    //Kreiranje resetKorpa funkcije koja briše sve proizvode iz korpe.
    const resetKorpa = () => {
        setKorpaItems({});
      };
    //vrednost konteksta
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