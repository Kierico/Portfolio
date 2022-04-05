import { ReactNode } from "react";

import "../container/container.scss";

type ContainerProps = {
    icon?: ReactNode,
    h2?: string
}

export function Container({ icon, h2 }: ContainerProps) {
    return (
        <div className="container-card">
            <figure>
                <div className="faCode">
                    {icon}
                </div>
                <h2>{h2}</h2>
            </figure>
        </div>
    );
}