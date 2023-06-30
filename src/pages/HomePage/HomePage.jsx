import TitleBanner from "../../components/TitleBanner/TitleBanner";
import Gallery from "../../components/Gallery/Gallery";
import HomeBannerBackground from "../../assets/home_banner_background.svg";

export default function HomePage() {
    const title = "Chez vous, partout et ailleurs";
    return (
        <>
            <TitleBanner title={title} img={HomeBannerBackground} />
            <Gallery />
        </>
    );
}
