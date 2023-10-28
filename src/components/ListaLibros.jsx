import { Link } from "react-router-dom";

const ListaLibros = ({ libros }) => {
  return (
    <div>
      <header>
        <h2 className="titulo">Libros</h2>
      </header>
      <div className="container">
        <Link to={"/libro/crear"} className="enlace-crear">
          Crear Libro
        </Link>
        <div className="Lista-elementos">
          <ul>
            {libros.map((libro) => (
              <li key={libro.id} className="elemento-lista">
                {libro.titulo}
                <Link to={`/libro/${libro.id}`} className="enlace-ver-mas">
                  {" "}
                  Ver más
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ListaLibros;
