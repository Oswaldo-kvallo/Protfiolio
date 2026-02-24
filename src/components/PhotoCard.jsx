function PhotoCard({ photo, onClick }) {
  return (
    <img
      src={photo.image}
      alt={photo.title}
      onClick={() => onClick(photo)}
    />
  );
}

export default PhotoCard;
