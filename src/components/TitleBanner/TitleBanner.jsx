export default function TitleBanner({ title = "", img }) {
    return (
        <section className="title-banner">
            <img alt="banner" src={img} />
            {{ title } && <h2>{title}</h2>}
        </section>
    );
}
