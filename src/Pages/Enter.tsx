import React from 'react';
import './Enter.css';
import NavBar from '../UI/NavBar';
import { Link } from 'react-router-dom';

function Enter() {
    
    return (
        <div className='container'>
            <NavBar />
            <div className='susa'>
            
            <form className='rectangle36'>
                <div className='txt'>
                    Вход
                </div>
    
                <div className='back'> 
                    <Link to= '/'>Назад</Link>
                </div>
                <div>
                    <input className='email' placeholder='Логин' type='email'></input>
                    <input className='pass' placeholder='Пароль' type='password'></input>
                </div>
                <div>
                    <button className='subm' type='submit'>Войти</button>
                </div>
                <div className='reg'>
                    <Link to='/registration' className='r' >Нет аккаунта?</Link>
                </div>
            </form>
        </div>
    </div>
    )
};

export default Enter;