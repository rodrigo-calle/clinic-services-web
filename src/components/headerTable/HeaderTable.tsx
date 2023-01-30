import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import './HeaderTable.scss';

const HeaderTable = () => {
    const navigate = useNavigate();
    const userData = localStorage.getItem("biolabUser")
    const deleteSesion = () => {
        localStorage.removeItem("biolabUser")
        navigate("/login")
    }
    return (
        <div className="header-table-container">
            <div className="header-table-name">
                {
                    userData ? (
                        `Bienvenido: ${JSON.parse(userData).NomCom}`
                    ):("Bienvenido:")

                }
            </div>
            <div className="header-table-logout" onClick={()=> deleteSesion()}>
                Cerrar Sesión
            </div>

        </div>
    )
}

export default HeaderTable;