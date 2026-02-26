import { Link } from "react-router-dom";

function Home() {
    return(
        <main className="home">
            <section className="hero">
            <h2>Hola soy Oswaldo Cruz Lopez</h2>
            <p className="subtitle">Fotografo deportivo</p>
            <p className="description">Especializado en capturar la intensidad, emoción y momentos decisivos
          del fútbol y la acción deportiva.</p>
          <Link to="/portfolio">
          <button>Ver portafolio</button>
          </Link>
        </section>
        </main>
    );
} 
export default Home;