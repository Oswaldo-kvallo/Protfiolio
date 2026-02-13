function PhotoModal({photo, onClose}) {
    if (!photo) return null

    return (
        <div className="modal-overplay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={photo.image} alt={photo.title} />
            <h2>{photo.title}</h2>
            <button onClick={onClose}>Cerrar</button>
            </div>
        </div>
    )
}

export default PhotoModal;