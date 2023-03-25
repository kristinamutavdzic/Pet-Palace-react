//React custom hook-a nazvana useCopyToClipboard, koji obezbeđuje 
//funkcionalnost za kopiranje teksta u privremenu memoriju 
//(clipboard) i praćenje statusa operacije


//Uvozimo useState i useEffect hook-ove iz React biblioteke.
import { useState, useEffect } from "react";
//Uvozimo funkciju copy iz copy-to-clipboard paketa.
import copy from "copy-to-clipboard";


//Izvozimo funkciju useCopyToClipboard koja prihvata opcionu 
//vrednost timeDisabled (podrazumevana vrednost je null).
export const useCopyToClipboard = (timeDisabled = null) => {
  //Definišemo stanje promenljive isCopied na false i njen setter setCopied
  const [isCopied, setCopied] = useState(false);


  //Definišemo funkciju handleCopy koja poziva copy
  //funkciju sa tekstom koji treba kopirati kao argument, 
  //i postavlja isCopied stanje na true.
  const handleCopy = (textToCopy) => {
    copy(textToCopy.toString());
    setCopied(true);
  };

  //Koristimo useEffect hook da bismo pratili promene 
  //isCopied stanja i resetovali stanje na false nakon određenog 
  //vremena, ako je isCopied vrednost true.
  useEffect(() => {
    if (!isCopied) return;
    let timeOut = window.setTimeout(() => setCopied(false), timeDisabled);
    return () => window.clearTimeout(timeOut);
  }, [isCopied]);

  //Vraćamo niz sa dve vrednosti: trenutno stanje isCopied 
  //i funkciju handleCopy koja pokreće operaciju kopiranja.
  return [isCopied, handleCopy];
};