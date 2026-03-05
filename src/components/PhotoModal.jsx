import { createPortal } from "react-dom";

function PhotoModal({ photo, onClose }) {
  if (!photo) return null;

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={photo.image} alt={photo.title} />
        <h2>{photo.title}</h2>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>,
    document.body
  );
}

export default PhotoModal;
