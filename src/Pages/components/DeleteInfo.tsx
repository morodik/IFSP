import React from "react";
import './DeleteInfo.css';
import { Link } from "react-router-dom";

function DeleteInfo () {

    return (
        <div>
            <div id="delete_inf">
                <div id="delete_txt">
                    Удаление аккаунта
                </div>
                <div id="delete_link">
                    <Link id="link_del" to={''}>Если решите уйти</Link>
                </div>

            </div>
        </div>
    )
};

export default DeleteInfo;