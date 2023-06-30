import Thumb from "../Thumb/Thumb";
import logements from "../../data/logements.json";

export default function Gallery() {
    return (
        <section className="gallery">
            {logements.map((logement) => {
                return (
                    <Thumb
                        key={logement.id}
                        url={logement.id}
                        img={logement.cover}
                        title={logement.title}
                    />
                );
            })}
        </section>
    );
}
