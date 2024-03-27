import React from 'react';
import './Registration.css';

function Registration() {
    
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
                    <input id='login'></input>
                    <h2 id='passtxt'>Придумайте пароль</h2>
                    <input id='pass' type='password'></input>
                    <h2 id='rpasstxt'>Повторите пароль</h2>
                    <input id='rpass' type='password'></input>
                    <button id='reg' type='submit'>Зарегестрироваться</button>
                </form>
            </div>
        </div>
    )
}

export default Registration;