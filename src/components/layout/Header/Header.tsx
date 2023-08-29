import { Link } from "react-router-dom";

type InnerLink = {
    text: string;
    url: string;
};

const LINKS: InnerLink[] = [];

const Header = () => {
    return (
        <header className="header">
            <Link to="/" className="h3 header__logo">
                BarawWeb
            </Link>

            <nav>
                {LINKS.map((link, i) => {
                    return (
                        <Link to={link.url} key={i} className="h5">
                            {link.text}
                        </Link>
                    );
                })}
            </nav>
        </header>
    );
};

export default Header;
