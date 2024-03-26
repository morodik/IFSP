import './MainPage.css';
import NavBar from '../UI/NavBar'
import Afisha from '../UI/Afisha';
import UnderBar from '../UI/UnderBar';
import React from 'react';
//import { useState, useEffect } from 'react';


function MainPage() {
    
    window.addEventListener('scroll', function () {
        let scrollPos = window.scrollY;
        console.log(scrollPos);
        if (scrollPos >= 505) {
            console.log("stop");
            window.scrollTo(0, 505); // Остановка прокрутки на 505 пикселях
        }
    });
    
    window.addEventListener('wheel', function(event) {
        let scrollPos = window.scrollY;
        let maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        
        if (scrollPos >= 505 && event.deltaY > 0 && scrollPos < maxScroll) {
            // Разрешаем прокрутку вниз, если пользователь пытается прокрутить вниз после остановки и не достигнут конец страницы
            event.stopPropagation();
        }
    });
    return (
        <div>
            <NavBar /> 
            <div id='fon'>
                <div id='cntainer'>
                    <button id='rectangle_15'><h1>Случайный фильм</h1></button>
                </div>
                <button id='rectangle_16'> <h1>Подбор фильмов по интересам</h1></button>
                <div>
                    <h1 id='afisha'>Афиша: </h1>
                </div>
                <button id='rectangle_17'> <h1>Вспомнить фильм</h1></button>
                <Afisha />
            </div>
            <UnderBar />
        </div>
    )
}

export default MainPage;