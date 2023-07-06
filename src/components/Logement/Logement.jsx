import Carousel from "../Carousel/Carousel";
import Dropdown from "../Dropdown/Dropdown";
import Tag from "../Tag/Tag";
import Rate from "../Rate/Rate";
import Avatar from "../Avatar/Avatar";

export default function Logement({ ...logement }) {
    return (
        <div className="logement">
            <Carousel title={logement.title} images={logement.pictures} />
            <section className="information">
                <div className="container-left">
                    <h1>{logement.title}</h1>
                    <h2>{logement.location}</h2>
                    <div className="container-tags">
                        {logement.tags.map((label, index) => (
                            <Tag key={index} label={label} />
                        ))}
                    </div>
                </div>
                <div className="container-right">
                    <Avatar
                        name={logement.host.name}
                        picture={logement.host.picture}
                    />
                    <Rate rating={logement.rating} />
                </div>
            </section>
            <section className="description">
                <Dropdown title="Description" content={logement.description} />
                <Dropdown title="Équipements" content={logement.equipments} />
            </section>
        </div>
    );
}
