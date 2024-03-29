import React from "react";
import './input.css';
import { useState } from "react";

function Input() {

    const [email, setEmail] = useState();
    const [dirtyEmail, setDirtyEmail] = useState();
    const [emailError, setEmailError] = useState();
    
    return (
        <div>
            <input name="email" className="input" type="email" placeholder="Логин"></input>
        </div>
    )
}
export default Input;