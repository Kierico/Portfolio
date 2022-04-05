import { Card } from "../card/Card";

import greatCoffeImg from "../../assets/images/great-coffe.png";

import "../projects/projects.scss";

export function Projects() {
    return (
        <section id="Projetos" className="projects-container">
            <h1>Projetos</h1>
            <div className="projects-grid">
                <Card img={greatCoffeImg} figcaption="Rocket Coffe" p="HTML e CSS" span="(Desktop)" />
                <Card img={greatCoffeImg} figcaption="Rocket Coffe" p="HTML e CSS" span="(Desktop)" />
                <Card img={greatCoffeImg} figcaption="Rocket Coffe" p="HTML e CSS" span="(Desktop)" />
                <Card img={greatCoffeImg} figcaption="Rocket Coffe" p="HTML e CSS" span="(Desktop)" />
            </div>
        </section>
    );
}