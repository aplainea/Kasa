import logo_white from "../../assets/logo_white.svg";

export default function Footer() {
    return (
        <footer>
            <img alt="Kasa" src={logo_white}></img>
            <p>
                © <span>{new Date().getFullYear()}</span> Kasa. All rights
                reserved
            </p>
        </footer>
    );
}
