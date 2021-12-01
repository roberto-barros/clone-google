import React from "react";
import "./footer.scss";

const Footer = () => {

    return (
        <footer className="footer">
            <div className="footer__first">Brasil</div>

            <div className="footer__second">
                <div className="footer__itens">
                    <ul className="footer__menu">

                        <li className="footer__menu--itens"><a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=webhp&cd=&cad=rja&uact=8&ved=0ahUKEwj7rZrRjsP0AhU1GLkGHQXdDkAQkNQCCAw&url=https%3A%2F%2Fabout.google%2F%3Futm_source%3Dgoogle-BR%26utm_medium%3Dreferral%26utm_campaign%3Dhp-footer%26fg%3D1&usg=AOvVaw3gf0CCgkBW5U8ABkzdJTLX" target="_blank" rel="noopener noreferrer">Sobre</a></li>

                        <li className="footer__menu--itens"><a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=webhp&cd=&cad=rja&uact=8&ved=0ahUKEwj7rZrRjsP0AhU1GLkGHQXdDkAQkdQCCA0&url=https%3A%2F%2Fwww.google.com%2Fintl%2Fpt-BR_br%2Fads%2F%3Fsubid%3Dww-ww-et-g-awa-a-g_hpafoot1_1!o2%26utm_source%3Dgoogle.com%26utm_medium%3Dreferral%26utm_campaign%3Dgoogle_hpafooter%26fg%3D1&usg=AOvVaw0SBrV37CSf6tzE6MLGHNdg" target="_blank" rel="noopener noreferrer">Publicidade</a></li>

                        <li className="footer__menu--itens"><a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=webhp&cd=&cad=rja&uact=8&ved=0ahUKEwj7rZrRjsP0AhU1GLkGHQXdDkAQktQCCA4&url=https%3A%2F%2Fwww.google.com%2Fservices%2F%3Fsubid%3Dww-ww-et-g-awa-a-g_hpbfoot1_1!o2%26utm_source%3Dgoogle.com%26utm_medium%3Dreferral%26utm_campaign%3Dgoogle_hpbfooter%26fg%3D1&usg=AOvVaw2SJ4zwRVXKyZr53qG9dm4K" target="_blank" rel="noopener noreferrer">Negócios</a></li>

                        <li className="footer__menu--itens"><a href="https://google.com/search/howsearchworks/?fg=1" target="_blank" rel="noopener noreferrer">Como funciona a Pesquisa</a></li>

                    </ul>
                </div>

                <div className="footer__itens">
                    <ul className="footer__menu">

                        <li className="footer__menu--itens"><a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=webhp&cd=&cad=rja&uact=8&ved=0ahUKEwj7rZrRjsP0AhU1GLkGHQXdDkAQ8awCCA8&url=https%3A%2F%2Fpolicies.google.com%2Fprivacy%3Fhl%3Dpt-BR%26fg%3D1&usg=AOvVaw38fspUc-lPeC-l8V8E2yk0" target="_blank" rel="noopener noreferrer">Privacidade</a></li>

                        <li className="footer__menu--itens"><a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=webhp&cd=&cad=rja&uact=8&ved=0ahUKEwjs_u-Tj8P0AhWBH7kGHdE8B-UQ8qwCCBA&url=https%3A%2F%2Fpolicies.google.com%2Fterms%3Fhl%3Dpt-BR%26fg%3D1&usg=AOvVaw3h34CxlTDQxqKNSK8DxUZk" target="_blank" rel="noopener noreferrer">Termos</a></li>

                        <li className="footer__menu--itens"><a href="http://" target="_blank" rel="noopener noreferrer">Configurações</a></li>

                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;