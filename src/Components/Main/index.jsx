import React from "react";
import "./main.scss";
import google from "../../images/google.gif"

const Main = () => {

    return (
        <main>
            <form className="main__container">

                <div className="main__imgs">
                    <img className="main__logo" src={google} alt="Logo Google" title="Festividades de final de ano 2021" />
                </div>

                <input className="main__input" type="search" title="Pesquisar" />

                <div className="main__buttons">
                    <button className="button">Pesquisa Google</button>
                    
                    <button className="button"><a href="https://www.google.com/doodles" target="_blank" rel="noopener noreferrer">Estou com sorte</a></button>
                </div>
            </form>

        </main>
    )
}

export default Main;