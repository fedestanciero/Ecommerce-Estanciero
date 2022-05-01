import React from 'react';

export default function NavBar () {
    const logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PlayStation_logo.svg/2560px-PlayStation_logo.svg.png"
    return (
        <header className="header row justify-content-center align-items-center">
            <div className="div-logo col-1">
                <img className='img-fluid' src={logo} alt="logo" />
            </div>
            <nav className="div-logo col-10 justify-content-center align-items-center">
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
                <img src="src/components/navBar/img/cart-icon.svg" alt="" />
            </div>
        </header>
    )
}