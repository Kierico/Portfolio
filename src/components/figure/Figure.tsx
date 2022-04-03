import "../figure/figure.scss";

// type ImgProps = ImgHTMLAttributes<HTMLImageElement>;

type FigureProps = {
    img?: string,
    h2?: string,
    p?: string
}

export function Figure({ img, h2, p }: FigureProps) {
    return (
        <figure className="figure-card">
            <div>
                <img src={img} alt="img" />
            </div>
            <h2>{h2}</h2>
            <p>{p}</p>
        </figure>
    );
}