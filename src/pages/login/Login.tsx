import * as React from 'react';
import './Login.scss';

const Login = () => {
    return (
        <>
        {/* https://www.biolabinmunomedcorp.com/consultasweb/imagenes/logo.png */}
            <header className='header-login'>
                <nav className='nav-login'>
                    <img src="https://www.biolabinmunomedcorp.com/consultasweb/imagenes/logo.png" alt="Biolab Logo" />
                    <button>
                        <img src="https://icongr.am/fontawesome/angle-left.svg?size=128&color=ffffff" alt="left row" />
                        <p>Volver</p>
                    </button>
                </nav>
            </header>
            <div className='login-container'>
                <div className='login-image-container'>
                    <img 
                        src="https://www.biolabinmunomedcorp.com/consultasweb/imagenes/paciente_side.png"
                        alt="" 
                    />
                </div>
                <div className='form-container-login'>
                    <h2>Resultados</h2>
                    <form action="">
                        <label htmlFor="ruc">
                            Usuario
                        </label>
                        <br />
                        <input 
                            type="text"
                            name='ruc'
                        />
                        <br />
                        <label htmlFor="password">
                            Contraseña
                        </label>
                        <br />
                        <input 
                            type="password"
                            name='password'
                        />
                        <br />
                        <button className='submit-login-button'>
                            Ingresar
                        </button>
                        <br />
                        <p className='last-text'>
                            Biolab & Inmunomed © 2022 | Todos los derechos reservados.
                        </p>
                    </form>
                </div>

            </div>

        </>
    )
}

export default Login;