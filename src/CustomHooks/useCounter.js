import { useState } from "react";

export const useCounter = () => {
    const [ count , setCount ] = useState(0);

    const userAction = (event) => {
        const whichAction = event.target.innerText;
        let number = count;
        switch(whichAction){
            case "Increase" : 
                setCount(++number);
                break;
            case "Decrease" : 
                setCount(--number);
                break;
            case "Reset" : 
                setCount(0);
                break;
            default :
                return;
        }
    }

    return [ count , userAction ]
};