import React from 'react';
import './Enter.css';
import NavBar from '../UI/NavBar';
import { Link } from 'react-router-dom';
import Input from './components/InputEmail';
import InputPass from './components/InputPass';

function Enter() {
    
    return (
        <div className='container'>
            <NavBar />
            <div id='susa'>
                <form id='rectangle_36'>
                    <div id='entertxt'>
                        <h2 className='txth2'> Вход</h2>
                    </div>
                    <div id='loginInp'>
                        <Input />
                    </div>
                    <div id='passInp'>
                        <InputPass />
                    </div>
                    <button className='subm'type='submit'>Войти</button>
                    <Link to='/registration' className='regTo'>Регистрация</Link>

                </form>
            </div>
    </div>
    )
};

export default Enter;