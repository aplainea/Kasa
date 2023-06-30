import { Link } from "react-router-dom";

export default function Thumb({ url, img, title }) {
    return (
        <Link to={`logement/${url}`}>
            <article className="thumb">
                <img src={img} alt={title} />
                <span className="thumb-gradiant" />
                <h2>{title}</h2>
            </article>
        </Link>
    );
}
