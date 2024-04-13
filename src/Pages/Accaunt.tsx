import React from "react";
import './Accaunt.css';
import './components/LoginInfo'
import LoginInfo from "./components/LoginInfo";
import PassInfo from "./components/PassInfo";
import ZhanrInfo from "./components/ZhanrInfo";
import DeleteInfo from "./components/DeleteInfo";


function Accaunt () {
    return (
        <div id="fon">
              <div className='i'></div>
                <div className='rectangle25'></div>
                <div className='rectangle23'></div>
                <div className='rectangle24'></div>
                <div className='s'>S</div>
                <div>
                    <div id="login_bar">
                        <div id="email">
                            kirieshka@biba.bi
                        </div>
                    </div>
                    <div id="login_photo"></div>
                </div>

                <div id="info">
                    <div id="txt">
                        <h2 id="txt_inf">Основная информация</h2>
                    </div>

                    <LoginInfo />
                    <PassInfo />
                    <ZhanrInfo />
                    <DeleteInfo />
                </div>
        </div>
    )
}

export default Accaunt;