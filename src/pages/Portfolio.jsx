import { useState } from "react";
import PhotoModal from "../components/PhotoModal";
import { photos } from "../data/photos";

function Portfolio() {
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  return (
    <div>
      <h1>Mi portafolio</h1>

      <div className="grid">
    {photos.map((photo) => (
      <img
      key={photo.id}
      src={photo.image} 
      alt={photo.title}
      onClick={() => setSelectedPhoto(photo)}
      />
    ))}
      </div>
      <PhotoModal
      photo={selectedPhoto}
      onClose={() => setSelectedPhoto(null)}
      />
    </div>
  );
}

export default Portfolio;
