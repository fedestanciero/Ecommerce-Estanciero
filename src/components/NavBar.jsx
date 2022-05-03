import React from 'react';
import "./styles/NavBar.css"
import CartWidget from "./CartWidget"

export default function NavBar () {
    const logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PlayStation_logo.svg/2560px-PlayStation_logo.svg.png"
    return (
        <header className="header row justify-content-center align-items-center">
            <div className="col-1">
                <img className='w-50' src={logo} alt="logo" />
            </div>
            <nav className="col-10 justify-content-center align-items-center">
                <ul className='nav'>
                    <li>
                        <a href="">Inicio</a>
                    </li>
                    <li>
                        <a href="">Categorías</a>
                    </li>
                    <li>
                        <a href="">Contacto</a>
                    </li>
                </ul>
            </nav>
            <div className='col-1 cart-icon'>
            < CartWidget/>
            </div>
        </header>
    )
}