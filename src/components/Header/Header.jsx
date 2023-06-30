import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

export default function Header() {
    return (
        <header>
            <Link to={"/"}>
                <img src={logo} alt="Logo Kasa"></img>
            </Link>

            <nav>
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            A Propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
