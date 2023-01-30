import * as React from 'react';
import './Login.scss';
import clientService from '../../services/auth'
import { LoginType } from '../../types/types';
import { Link, useNavigate } from 'react-router-dom';

type responseClientType = {
    NomCom: string;
    NroRuc: string;
}
const Login = () => {
    // console.log(process.env)
    const navigate = useNavigate()
    const [loginData, setLoginData] = React.useState<LoginType>({
        ruc: '',
        password: ''
    })

    const setInput = (e: any) => {
        const {name, value} = e.target;
        setLoginData((prev) => ({
            ...prev,
            [name]: value

        }))
    }
    const login = async (data: LoginType): Promise<any> => {
        const response = await clientService.login(data);
        const responseParsed = await response.json()
        const userData = responseParsed[0] as responseClientType
        if(response.status === 200) {
            localStorage.setItem("biolabUser", JSON.stringify({
                NomCom: userData.NomCom,
                NroRuc: userData.NroRuc,
            }))

            navigate('/service-list')
        } else {            
            alert("Credenciales Incorrectas, Inténtelo Nuevamente")
            setLoginData({
                ruc: '',
                password: ''
            })
        }
    }
    return (
        <>
            <header className='header-login'>
                <nav className='nav-login'>
                    <img src="https://www.biolabinmunomedcorp.com/consultasweb/imagenes/logo.png" alt="Biolab Logo" />
                    <Link to="/" className='back-link'>
                        <button>
                            <img src="https://icongr.am/fontawesome/angle-left.svg?size=128&color=ffffff" alt="left row" />
                            <p>Volver</p>
                        </button>
                    </Link>

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
                
                        <label htmlFor="ruc">
                            Usuario
                        </label>
                        <br />
                        <input 
                            type="text"
                            name='ruc'
                            required
                            value={loginData.ruc}
                            onChange={setInput}
                        />
                        <br />
                        <label htmlFor="password">
                            Contraseña
                        </label>
                        <br />
                        <input 
                            type="password"
                            name='password'
                            required
                            value={loginData.password}
                            onChange={setInput}
                        />
                        <br />
                        <button type='submit' className='submit-login-button' onClick={() => login(loginData)}>
                            Ingresar
                        </button>
                        <br />
                        <p className='last-text'>
                            Biolab & Inmunomed © 2022 | Todos los derechos reservados.
                        </p>
                    
                </div>

            </div>

        </>
    )
}

export default Login;