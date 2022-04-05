import { ReactNode } from "react";

import "../imageCard/imageCard.scss";

type IconProps = {
    icon?: ReactNode
}

export function ImageCard({ icon }: IconProps) {
    return (
        <figure className="imageCard-container">
            <div className="imageCard-content">
                {icon}
            </div>
        </figure>
    );
}