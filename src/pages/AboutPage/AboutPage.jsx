import Dropdown from "../../components/Dropdown/Dropdown";
import TitleBanner from "../../components/TitleBanner/TitleBanner";
import AboutBannerBackground from "../../assets/about_banner_background.svg";

export default function AboutPage() {
    const dropdownContent = {
        fiabilite:
            "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
        respect:
            "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
        service:
            "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
        securite:
            "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    };
    return (
        <>
            <TitleBanner img={AboutBannerBackground} />
            <div className="about-page-dropdowns">
                <Dropdown
                    title="Fiabilité"
                    content={dropdownContent.fiabilite}
                />
                <Dropdown
                    title="Respect"
                    content={dropdownContent.respect}
                    open={false}
                />
                <Dropdown
                    title="Service"
                    content={dropdownContent.service}
                    open={false}
                />
                <Dropdown
                    title="Securité"
                    content={dropdownContent.securite}
                    open={false}
                />
            </div>
        </>
    );
}
