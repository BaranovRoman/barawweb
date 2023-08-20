import { Link } from "react-router-dom";

const LINKS = [
    {
        text: "About",
        url: "/about",
    },
];

const Header = () => {
    return (
        <header className="header">
            <Link to="/" className="h3">
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
