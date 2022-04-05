import { FaCode, FaMobileAlt } from "react-icons/fa"

import { Section } from "../../layouts/section/Section";
import { Container } from "../container/Container";

import "../services/services.scss";

export function Services() {
    return (
        <div id="Servicos">
            <Section>
                <div className="services-container">
                    <h1>Serviços</h1>
                    <div className="services-card">
                        <Container icon={<FaCode />} h2={`${"Criação de sites"}`} />
                        <Container icon={<FaMobileAlt />} h2={`${"Sites responsivos"}`} />
                    </div>
                </div>
            </Section>
        </div>
    );
}