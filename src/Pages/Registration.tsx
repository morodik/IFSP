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
    const [confirmPassword, setConfirmPassword] = useState<string | undefined>();
    const [dirtyConfirmPassword, setDirtyConfirmPassword] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState('Поле не может быть пустым');

    const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
        const re =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!re.test(String(e.target.value).toLowerCase())) {
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
    const confirmPasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
        if (!e.target.value) {
            setConfirmPasswordError('Поле не может быть пустым')
        } else if (e.target.value != password) {
            setConfirmPasswordError('Пароли не совпадают')
        } else {
            setConfirmPasswordError('');
        } 
    };
    const blurHandler = (e: React.FocusEvent<HTMLInputElement, Element>) => {
        switch (e.target.name) {
            case 'email':
                setDirtyEmail(true)
                break
            case 'password':
                setDirtyPassword(true)
                break
            case 'rpassword':
                setDirtyConfirmPassword(true)
        }
    };
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
                    <div>
                    <input 
                        value={email}
                        onChange={e => emailHandler(e)}
                        onBlur={e => blurHandler(e)} name="email"
                        style={{borderColor: dirtyEmail && emailError ? 'rgba(210, 94, 94, 1)' : 'rgba(128, 94, 210, 1)' }}
                        id='login'></input>
                    </div>
                    {((dirtyEmail && emailError)) && <div id='error_message_email' >{emailError}</div>}
                    <h2 id='passtxt'>Придумайте пароль</h2>
                    <div>
                        <input
                            onChange={e => passwordHandler(e)}
                            onBlur={e => blurHandler(e)} name="password"
                            id='pass' type='password'
                            style={{borderColor: dirtyPassword && passwordError ? 'rgba(210, 94, 94, 1)' : 'rgba(128, 94, 210, 1)'}}></input>
                            {((dirtyPassword && passwordError)) && <div id='error_message' >{passwordError}</div>}
                        </div>
                    <h2 id='rpasstxt'>Повторите пароль</h2>
                    <div>
                    <input
                            value={confirmPassword}
                            onChange={e => confirmPasswordHandler(e)}
                            onBlur={e => blurHandler(e)}
                            name='rpassword'
                            id='rpass'
                            type='password'
                            style={{ borderColor: dirtyConfirmPassword && confirmPasswordError ? 'rgba(210, 94, 94, 1)' : 'rgba(128, 94, 210, 1)' }}
                        />
                        {dirtyConfirmPassword && confirmPasswordError && <div id='error_message_confirm'>{confirmPasswordError}</div>}
                    </div>
                    <button id='reg' type='submit'>Зарегистрироваться</button>
                </form>
            </div>
        </div>
    )
};


export default Registration;
