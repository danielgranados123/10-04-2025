import "./Nav.css";

const Nav = () => { 
    return (
        <nav className="nav-container">
            <div className="nav-content"> 
                <div className="nav-logo">
                    <strong><a href="/" className="nav-link">Daniel Granados</a></strong>
                </div>
                <ul className="nav-menu">
                    <li>
                        <a href="/" className="nav-link">Inicio</a>
                    </li>
                    <li>
                        <a href="/dragon" className="nav-link">Dragon Ball</a>
                    </li>
                    <li>
                        <a href="/morty" className="nav-link">Rick and Morty</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
