/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

export const useContactForm = () => {
const [nameInput, setNameInput] = useState<string>("");
const [emailInput, setEmailInput] = useState<string>("");
const [numberInput, setNumberInput] = useState<string>("");
const [dateInput, setDateInput] = useState<string>("");

const onSubmit = (e:any):void => {
    e.preventDefault();
    location.href = `https://api.whatsapp.com/send?phone=50487742908&text=Nueva%20consulta%3A%0ANombre:%20${nameInput}%20%0AEmail:%20${emailInput}%20%0AFecha:%20${dateInput}%20%0ANumero%20de%20telefono:%20${numberInput}%20`;
        
}
  return  {
    // * Propiedades
    nameInput,
    emailInput,
    numberInput,
    dateInput,
    // * Metodos
    setNameInput,
    setEmailInput,
    setNumberInput,
    setDateInput,
    onSubmit
  }
  
}
