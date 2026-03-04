function PhotoCard({ photo, onClick }) {
  return (
     <div 
      className="photo-card"
      onClick={() => onClick(photo)}
    >
      <img
        src={photo.image}
        alt={photo.title}
      />

      <div className="photo-overlay">
        <h3>{photo.title}</h3>
      </div>
    </div>
  );
}

export default PhotoCard;
