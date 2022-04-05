import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";

import { Section } from "../../layouts/section/Section";
import { ImageCard } from "../imageCard/ImageCard";

import "../skills/skills.scss";

export function Skills() {
    return (
        <Section>
            <div id="Skills" className="skills-container">
                <h1>Minhas skills</h1>
                <div className="skills-grid">
                    <ImageCard icon={<FaHtml5 />} />
                    <ImageCard icon={<FaCss3Alt />} />
                    <ImageCard icon={<FaJs />} />
                    <ImageCard icon={<FaReact />} />
                </div>
            </div>
        </Section>
    );
}