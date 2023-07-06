export default function Rate({ rating }) {
    const renderStars = () => {
        const stars = [];

        for (let i = 0; i < rating; i++) {
            stars.push(<span key={i} className="star-red" />);
        }

        for (let i = rating; i < 5; i++) {
            stars.push(<span key={i} className="star-gray" />);
        }

        return stars;
    };

    return <div className="rate">{renderStars()}</div>;
}
