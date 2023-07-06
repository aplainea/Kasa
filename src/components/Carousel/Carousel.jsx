import React, { useState } from "react";

export default function Carousel({ title, images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const getCurrentPosition = () => {
        const currentPosition = currentIndex + 1;
        const totalImages = images.length;
        return `${currentPosition}/${totalImages}`;
    };

    return (
        <div className="carousel">
            <button className="icon-left" onClick={handlePrev} />
            <img src={images[currentIndex]} alt={`${title}`} />
            <button className="icon-right" onClick={handleNext} />
            <div className="position">{getCurrentPosition()}</div>
        </div>
    );
}
