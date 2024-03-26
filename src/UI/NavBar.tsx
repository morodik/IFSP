import React from 'react';
import './NavBar.css';
import SearchBar from '../Pages/components/SearchBar'
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';


function NavBar() {
   
    return (
        <div id='navb'>
            <div className='i'></div>
            <div className='rectangle25'></div>
            <div className='rectangle23'></div>
            <div className='rectangle24'></div>
            <div className='s'>S</div> 
            <div>
                <SearchBar />
            </div>              
            <Link to ='/enter' className='login'>Мой кинотеатр</Link>

            </div>
    )
}

export default NavBar;