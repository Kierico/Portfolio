import { ReactNode } from "react";

import "../section/section.scss";

type SectionProps = {
    children?: ReactNode
}

export function Section(props: SectionProps) {
    return (
        <section className="section-container" {...props} />
    );
}