import React, { useState } from 'react';
import './Enter.css';
import NavBar from '../UI/NavBar';
import { Link } from 'react-router-dom';

function Enter() {
    const [password, setPassword] = useState();
    const [dirtyPassword, setDirtyPassword] = useState(false);
    const [passwordError, setPasswordError] = useState('Поля не могу быть пустыми');
    const [email, setEmail] = useState();
    const [dirtyEmail, setDirtyEmail] = useState(false);
    const [emailError, setEmailError] = useState('Поля не могут быть пустыми');

    const blurHandler = (e: React.FocusEvent<HTMLInputElement, Element>) => {
        switch (e.target.name) {
            case 'email':
                setDirtyEmail(true)
                break
            case 'password':
                setDirtyPassword(true)
                break
        }
    }
    
    return (
        <div className='container'>
            <NavBar />
            <div id='susa'>
                <form id='rectangle_36'>
                    <div id='entertxt'>
                        <h2 className='txth2'> Вход</h2>
                    </div>
                    <div id='loginInp'>
                        <input onBlur={e => blurHandler(e)} name="email" className="input" type="email" placeholder="Логин"></input>
                    </div>
                    <div id='passInp'>
                        <input onBlur={e => blurHandler(e)} name="password" id="inputPass" type="password" placeholder="Пароль"></input>
                    </div>
                    {((dirtyEmail && emailError) || (dirtyPassword && passwordError)) && <div style={{color: 'rgba(210, 94, 94, 1)'}}>{passwordError}</div>}
                    <button className='subm'type='submit'>Войти</button>
                    <Link to='/registration' className='regTo'>Регистрация</Link>

                </form>
            </div>
    </div>
    )
};

export default Enter;