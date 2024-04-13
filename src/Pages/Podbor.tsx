import React from "react";
import ButtonPodbor from "../UI/ButtonPodbor";
import './Podbor.css';

function Podbor () {

    return (
        <div>
            <div id="fon_2"></div>
            <div className='i'></div>
            <div className='rectangle25'></div>
            <div className='rectangle23'></div>
            <div className='rectangle24'></div>
            <div className='s'>S</div> 
            <div id="choise">Выбирите жанры.</div>
            <div id="genres">
                <ButtonPodbor />
            </div>
        </div>
    )
};

export default Podbor;