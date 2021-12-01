import React from "react";
import "./header.scss";
import grid from "../../images/menu-grid.png"
import photo from "../../images/perfil.jpg"

const Header = () => {
    
    return(

    <header className="header__container">
            <ul className="header__menu">
                <li className="header__menu__item"><a href="https://mail.google.com/mail/?authuser=0&ogbl" target="_blank" rel="noopener noreferrer">Gmail</a></li>

                <li className="header__menu__item"><a href="https://www.google.com.br/imghp?hl=pt-BR&authuser=0&ogbl" target="_blank" rel="noopener noreferrer">Imagens</a></li>

                <li className="header__menu__item header__menu__item--grid">
                    <img className="grid" src={grid} alt="Menu grid" title="Google Apps"/>
                </li>

                <li className="header__menu__item">
                    <img className="item__photo" src={photo} alt="Foto Perfil" title="Conta do Google"/>
                </li>
            </ul>
    </header>
    )

}

export default Header;