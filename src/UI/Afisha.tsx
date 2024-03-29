import React from 'react';
import './Afisha.css';
import RandomMovie from '../API/RandomMovie';

function Afisha() {
    
    return (
        <div id='afisha'>
            <button id='left'>
                <div id='strel'></div>
                <div id='strel2'></div>
            </button>

            <div className='card'>
                <RandomMovie />
            </div>

            <button id='right'>
                <div id='strel_2'></div>
                <div id='strel2_2'></div>
            </button>
        </div>
    )
}

export default Afisha;