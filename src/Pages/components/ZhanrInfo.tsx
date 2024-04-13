import React from "react";
import './ZhanrInfo.css';
import { Link } from "react-router-dom";

function ZhanrInfo () {
    return (
        <div>
            <div id="zhanr_inf">
                <div id="zhanr_txt">Мои жанры</div>
                <div id="zhanr_link" >
                    <Link id="link_zh" to={''}>Мои любимые жанры</Link>
                </div>
            </div>
        </div>
    )
};

export default ZhanrInfo;