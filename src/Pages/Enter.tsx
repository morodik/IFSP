import React, { useEffect, useState } from 'react';
import './Enter.css';
import NavBar from '../UI/NavBar';
import { Link } from 'react-router-dom';

function Enter() {
    const [password, setPassword] = useState<string | undefined>();
    const [dirtyPassword, setDirtyPassword] = useState(false);
    const [passwordError, setPasswordError] = useState('Поле не может быть пустым' );
    const [email, setEmail] = useState<string | undefined>();
    const [dirtyEmail, setDirtyEmail] = useState(false);
    const [emailError, setEmailError] = useState('Поле не может быть пустым');
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        if (emailError || passwordError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [emailError, passwordError])

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

    const blurHandler = (e: React.FocusEvent<HTMLInputElement, Element>) => {
        switch (e.target.name) {
            case 'email':
                setDirtyEmail(true)
                break
            case 'password':
                setDirtyPassword(true)
                break
        }
    };
    
    return (
        <div className='container'>
            <NavBar />
            <div id='susa'>
                <form id='rectangle_36'>
                    <div id='entertxt'>
                        <h2 className='txth2'> Вход</h2>
                    </div>
                    <div id='loginInp'>
                        <input value={email}
                        onChange={e => emailHandler(e)}
                        onBlur={e => blurHandler(e)} name="email" 
                        className="input" type="email" placeholder="Логин"
                        style={{borderColor: dirtyEmail && emailError ? 'rgba(210, 94, 94, 1)' : 'rgba(128, 94, 210, 1)'}}>

                        </input>
                    </div>
                    {((dirtyEmail && emailError)) && <div className='error_message_email' >{emailError}</div>}
                    <div id='passInp'>
                        <input value={password} 
                        onChange={e => passwordHandler(e)}
                        onBlur={e => blurHandler(e)} name="password" id="inputPass" 
                        type="password" placeholder="Пароль"
                        style={{borderColor: dirtyPassword && passwordError ? 'rgba(210, 94, 94, 1)' : 'rgba(128, 94, 210, 1)'}}>
        
                        </input>
                    </div>
                    {((dirtyPassword && passwordError)) && <div className='error_message' >{passwordError}</div>}
                    <button disabled={!formValid} className={formValid ? 'subm' : 'subm disabled'} type='submit'>Войти</button>
                    <Link to='/registration' className='regTo'>Регистрация</Link>

                </form>
            </div>
    </div>
    )
};

export default Enter;