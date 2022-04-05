import "../header/header.scss";

export function Header() {
    return (
        <header>
            <div className="header-container">
                <h1>Portfólio</h1>
                <nav>
                    <ul>
                        <li><a href="./">Início</a></li>
                        <li><a href="./#Sobre">Sobre mim</a></li>
                        <li><a href="./#Projetos">Projetos</a></li>
                        <li><a href="./#Servicos">Serviços</a></li>
                        <li><a href="./#Skills">Minhas skills</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}