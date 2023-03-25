
//Uvozimo React biblioteku kako bismo koristili React funkcionalnosti.
import React from "react";
//React hook koji smo definisali
import { useCopyToClipboard } from "../custom hook/useCopyToClipboard";
//css za dugme
import "./CopyButton.css"

//Definišemo CopyButton komponentu koja prima
//textToCopy parametar od App.js-a
const CopyButton = ({ textToCopy }) => {

  //Koristimo useCopyToClipboard hook koji smo 
  //uvezli da bismo dobili isCopied (trenutno stanje kopiranja) 
  //i handleCopy (funkcija koja pokreće operaciju kopiranja). 
  //Prenosimo opcioni argument 2000 kako bismo označili vreme 
  //u milisekundama tokom kojeg se ne može ponoviti operacija kopiranja.
  const [isCopied, handleCopy] = useCopyToClipboard(2000);

  return (
    //Atribut disabled je postavljen na isCopied, što znači
    //da se dugme može kliknuti samo ako isCopied nije true. 
    //Na klik dugmeta, pokreće se funkcija handleCopy koja kopira textToCopy.
    //Prikazuje se tekst na dugmetu. 
    //Ako je isCopied true, prikazuje se tekst KOPIRANO. 
    //Inače, prikazuje se tekst KOPIRAJ.
  <div className="kontejnerCopy" >
    <button className="dugme-kopiranje" disabled={isCopied} onClick={() => handleCopy(textToCopy)}>
      {isCopied ? "KOPIRANO" : "KOPIRAJ"}
    </button>
    </div>
  );
};

export default CopyButton;