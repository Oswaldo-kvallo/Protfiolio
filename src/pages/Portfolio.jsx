import { useState } from "react";
import PhotoModal from "../components/PhotoModal";
import { photos } from "../data/photos";
import PhotoCard from "../components/PhotoCard";

function Portfolio() {
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  return (
    <section id="portfolio">
      <div>
      <h1>Mi portafolio</h1>

      <div className="grid">
    {photos.map((photo) => (
      <PhotoCard
    key={photo.id}
    photo={photo}
    onClick={setSelectedPhoto}
  />
    ))}
      </div>
      <PhotoModal
      photo={selectedPhoto}
      onClose={() => setSelectedPhoto(null)}
      />
    </div>
    </section>
  );
}

export default Portfolio;
