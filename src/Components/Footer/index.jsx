import React from "react";
import "./footer.scss";

const Footer = () => {

    return (
        <footer className="footer">
            <div className="footer__first">Brasil</div>

            <div className="footer__second">
                <div className="footer__itens">
                    <ul className="footer__menu">

                        <li className="footer__menu--itens"><a href="http://" target="_blank" rel="noopener noreferrer">Sobre</a></li>
                        <li className="footer__menu--itens"><a href="http://" target="_blank" rel="noopener noreferrer">Publicidade</a></li>
                        <li className="footer__menu--itens"><a href="http://" target="_blank" rel="noopener noreferrer">Negócios</a></li>
                        <li className="footer__menu--itens"><a href="http://" target="_blank" rel="noopener noreferrer">Como funciona a Pesquisa</a></li>

                    </ul>
                </div>

                <div className="footer__itens">
                    <ul className="footer__menu">

                        <li className="footer__menu--itens"><a href="http://" target="_blank" rel="noopener noreferrer">Privacidade</a></li>
                        <li className="footer__menu--itens"><a href="http://" target="_blank" rel="noopener noreferrer">Termos</a></li>
                        <li className="footer__menu--itens"><a href="http://" target="_blank" rel="noopener noreferrer">Configurações</a></li>

                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;