import "../header/header.scss";

export function Header() {
    return (
        <header>
            <h1>Portfólio</h1>
            <nav>
                <ul>
                    <li><a href="./">Início</a></li>
                    <li><a href="./">Sobre mim</a></li>
                    <li><a href="./">Projetos</a></li>
                    <li><a href="./">Serviços</a></li>
                    <li><a href="./">Minhas skills</a></li>
                </ul>
            </nav>
        </header>
    );
}