import React from "react";
import './InputPass.css';
import { useState } from "react";

function InputPass() {
    const [password, setPassword] = useState();
    const [dirtyPassword, setDirtyPassword] = useState();
    const [passwordError, setPasswordError] = useState();
    
    return (
        <div>
            <input name="password" id="inputPass" type="password" placeholder="Пароль"></input>
        </div>
    )
}
export default InputPass;