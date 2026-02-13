import { photos } from "../data/photos";
function GalleryGrid() {
    return(
        <section>
            {photos.map(photo => (
                <div key={photo.id}>
                    <img 
                    src={photo.image} 
                    alt={photo.title}
                    style={{width: "300px"}} 
                    />   
                    <p>{photo.title}</p>                
                </div>
            ))}
        </section>
    );
}

export default GalleryGrid;