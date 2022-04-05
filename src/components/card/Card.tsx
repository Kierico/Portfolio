import { ReactNode } from "react";
import "../card/card.scss";

type CardProps = {
    img?: string,
    figcaption?: string,
    p?: string,
    span?: string,
    icon?: ReactNode
}

export function Card({ img, figcaption, p, span }: CardProps) {
    return (
        <div className={`${"card-figure"}`}>
            <figure>
                <img src={img} alt={figcaption} />
                <figcaption>{figcaption}<span>{span}</span></figcaption>
                <p>{p}</p>
            </figure>
        </div>
    );
}