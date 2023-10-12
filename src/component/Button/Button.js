import React from "react";
import "./Button.css"

export const ButtonReset = (props) =>{
    return(
        <div>
            <button type="reset" className="buttonAlt" onClick={props.onReset}>
                Reset
            </button>
        </div>
    )
}

export const ButtonCalc = (props) =>{
    return(
        <div>
            <button type="submit" className="button">
                Calculate
            </button>
        </div>
    )
}