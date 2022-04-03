import astronautImg from "../../assets/images/astronaut.png";

import "../banner/banner.scss";

export function Banner() {
    return (
        <section className="container-banner">
            <div className="content-banner">
                <h1>Olá, eu sou o Kiérico Souza ;)</h1>
                <p>Desenvolvedor Front-End</p>
                <div className="button-banner">
                    <a href="./">Download CV</a>
                    <button>Entrar em contato</button>
                </div>
            </div>
            <img src={astronautImg} alt="Imagem astronauta" />
        </section>
    );
}