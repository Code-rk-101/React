import Display_tab from "./Display_tab";
import Buttons from "./Buttons";
import { useState } from "react";

function Main_container()
{
    const [calVal,setCalVal] = useState("");
    
    const onButtonClick = (btnValue)=>
    {
        if(btnValue === "AC")
        {
            setCalVal("")
        }else if(btnValue === '=')
        {
            // const calValAfterPercentage = (calVal)=>
            // {
            //     let newCalVal = calVal;
            //     for(let character of calVal)
            //     {
            //         if(character === '%')
            //         {
            //             newCalVal = calVal.replace("%","*0.01*");
            //         }
            //     }
            //     return newCalVal;
            // };

            let calValAfterPercentage = (calVal) => {
            return calVal.includes('%') ? calVal.replace(/%/g, "*0.01*") : calVal;
            };
            // evaluate expression safely and ensure the stored value is a string
            try {
                let CalVal = calValAfterPercentage(calVal);
                if(!CalVal) return; // nothing to evaluate
                const result = eval(CalVal);
                setCalVal(String(result)); // eval returns number so we need to convert it in string for further opertaions
            } catch {
                setCalVal("Error");
            }
        }else if(btnValue ==='C')
        {
            const updatedValue = calVal.slice(0,-1);
            setCalVal(updatedValue);
        }else
        {
            const newDisplayValue = calVal + btnValue;
            setCalVal(newDisplayValue);
        }
    };

    return (
        <div className="main_container">
            <Display_tab displayValue = {calVal}/>
            <Buttons click = {onButtonClick}/>
        </div>
    );
};

export default Main_container;   