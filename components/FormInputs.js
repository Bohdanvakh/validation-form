import "./formInput.css";
import App from "../App.js";
import { useState } from "react";

const FormInputs = (props) => {

    const {label, id, errorMessage, onChange, ...inputProps} = props;

    const [focused, setFocused] = useState(false);
    const handleFocus = (e) => {
        setFocused(true)
    };

    return(
        <div className="form-inputs">
            {/* <label>{props.placeholder}</label> */}
            <label>{label}</label>
            <input {...inputProps} onChange={onChange} onBlur={handleFocus} onFocus={() => inputProps.name==="confirmPass" && setFocused(true)} focused={focused.toString()}></input>
            <span>{errorMessage}</span>
        </div>
    )
}

export default FormInputs