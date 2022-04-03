import { Figure } from "../figure/Figure";

import linkedInImg from "../../assets/images/linkedin.svg";
import githubImg from "../../assets/images/github.svg";
import phoneImg from "../../assets/images/phone.svg";
import mailImg from "../../assets/images/mail.svg";

import "../about/about.scss";

export function About() {
    return (
        <section className="about-container">
            <div className="about-content">
                <h1>Sobre mim</h1>
                <p>Sou Kiérico, tenho 37 anos. Estudante do curso de Ciência da Computação. Estudo front-end todos os finais de semana, pois durante a semana estudo as disciplinas na faculdade, então, estudo todos os dias no geral. Disposto sempre em aprender e evoluir como um profissinal diferenciado.</p>
            </div>
            <div className="about-grid">
                <Figure img={linkedInImg} h2="Linkedin" p="/kierico" />
                <Figure img={githubImg} h2="Github" p="/Kierico" />
                <Figure img={phoneImg} h2="Contato" p="(92) 9 8424-4692" />
                <Figure img={mailImg} h2="eMail" p="kiericograndao@gmail.com" />
            </div>
        </section>
    );
}