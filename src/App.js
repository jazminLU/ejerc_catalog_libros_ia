import "./App.css";
import ListaLibros from "./components/ListaLibros";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetalleLibro from "./components/DetalleLibro";
import { libros } from "./data/libros.js";
import AcercaDe from "./components/AcercaDe";
import Menu from "./components/Menu";
import FormularioCrearLibro from "./components/FormularioCrearLibro";
import PaginaNoEncontrada from "./components/PaginaNoEncontrada";

function App() {
  return (
    //agregar componente ListaLibros
    <div>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<ListaLibros libros={libros} />} />
          <Route path="/libro/:id" element={<DetalleLibro libros={libros} />} />
          <Route path="/libro/crear" element={<FormularioCrearLibro />} />
          <Route path="*" element={<PaginaNoEncontrada />} />
          <Route path="/acerca-de" element={<AcercaDe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
