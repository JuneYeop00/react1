import { useState } from "react";
import { galleryImages } from "./imgData.jsx";

export default function Carousel() {
  const [index, setIndex] = useState(0);

  function handleNext() {
    if (index === galleryImages.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function handlePrevious() {
    if (index === 0) {
      setIndex(galleryImages.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  const slide = galleryImages[index];

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>
        <i>{slide.name}</i> by {slide.artist}
      </h2>

      <h3>
        ({index + 1} of {galleryImages.length})
      </h3>

      <img
        src={slide.url}
        alt={slide.alt}
        style={{
          width: "600px",
          height: "400px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />

      <p>{slide.description}</p>

      <div style={{ marginTop: "15px" }}>
        <button
          onClick={handlePrevious}
          style={{ marginRight: "10px", padding: "8px 16px" }}
        >
          Previous
        </button>

        <button onClick={handleNext} style={{ padding: "8px 16px" }}>
          Next
        </button>
      </div>
    </div>
  );
}