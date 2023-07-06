import datasLogements from "../../data/logements.json";
import Logement from "../../components/Logement/Logement.jsx";

import { useParams } from "react-router-dom";

export default function LogementPage() {
    const { id } = useParams();
    const logement = datasLogements.find((logement) => logement.id === id);
    return <Logement key={logement.id} {...logement} />;
}
