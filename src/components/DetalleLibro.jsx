import { Link, useParams } from "react-router-dom";
const DetalleLibro = ({ libros }) => {
  const { id } = useParams();
  const libro = libros.find((libro) => libro.id === parseInt(id));
  return (
    <div>
      <h2>(libro.titulo)</h2>
      <p>{libro.sinopsis}</p>
      <p>Autor: {libro.autor}</p>
      <p>Precio: {libro.precio}</p>
      <p>Categoria: {libro.categoria}</p>
    </div>
  );
};

export default DetalleLibro; // crear el componente
export const ListaLibros = ({ libros }) => {
  return (
    <div>
      <h2>Libros</h2>
      <Link to={"/libro/crear"}>Crear Libro</Link>
      <ul>
        {libros.map((libro) => (
          <li key={libro.id}>
            {libro.titulo}
            <Link to={`/libros/${libro.id}`}> Ver más</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
