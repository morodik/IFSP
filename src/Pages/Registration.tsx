import React, { useState } from 'react';
import { useEffect } from 'react';
import './Registration.css';

function Registration() {
    const [password, setPassword] = useState<string | undefined>();
    const [dirtyPassword, setDirtyPassword] = useState(false);
    const [passwordError, setPasswordError] = useState('Поле не может быть пустым' );
    const [email, setEmail] = useState<string | undefined>();
    const [dirtyEmail, setDirtyEmail] = useState(false);
    const [emailError, setEmailError] = useState('Поле не может быть пустым');
    const [formValid, setFormValid] = useState(false);

    const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Некорректный логин')
        } else {
            setEmailError('')
        }
    };

    const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        if (!e.target.value) {
            setPasswordError('Поле не может быть пустым');
        } else if (e.target.value.length < 3) {
            setPasswordError('Минимальное количество символов - 3');
        } else {
            setPasswordError('');
        }
    };

    const blurHandler = (e: React.FocusEvent<HTMLInputElement, Element>) => {
        switch (e.target.name) {
            case 'email':
                setDirtyEmail(true)
                break;
            case 'password':
                setDirtyPassword(true)
                break;
            case 'rpassword':
                break;
        }
    };

    // Проверка валидности формы
    useEffect(() => {
        if (emailError || passwordError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [emailError, passwordError]);


    return (
        <div>
            <div className='susa'>
                <div className='i'></div>
                <div className='rectangle25'></div>
                <div className='rectangle23'></div>
                <div className='rectangle24'></div>
                <div className='s'>S</div>
                <form id='rectangle36'>
                    <h2 id='regtxt'>Регистрация</h2>
                    <h2 id='logintxt'>Логин:</h2>
                    <input 
                        value={email}
                        onChange={e => emailHandler(e)}
                        onBlur={e => blurHandler(e)}
                        id='login'></input>
                     {((dirtyEmail && emailError)) && <div className='error_message_email' >{emailError}</div>}
                    <h2 id='passtxt'>Придумайте пароль</h2>
                    <input
                        value={password} 
                        onChange={e => passwordHandler(e)}
                        onBlur={e => blurHandler(e)}
                        name='password' id='pass' type='password'></input>
                    {((dirtyPassword && passwordError)) && <div className='error_message' >{passwordError}</div>}
                    <h2 id='rpasstxt'>Повторите пароль</h2>
                    <input 
                        value={password}
                        onBlur={e => blurHandler(e)}
                        name='rpassword' id='rpass' type='password'></input>
                    <button disabled={!formValid} id='reg' type='submit'>Зарегистрироваться</button>
                </form>
            </div>
        </div>
    )
};


export default Registration;
