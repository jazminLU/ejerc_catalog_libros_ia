import { useForm } from "react-hook-form";

const FormularioCrearLibro = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="titulo">Titulo</label>
          <input
            type="text"
            id="titulo"
            {...register("titulo", { required: true })}
          />
          {errors.titulo && <p>El titulo es obligatorio </p>}
        </div>

        <div>
          <label htmlFor="autor">Autor</label>
          <input
            type="text"
            id="autor"
            {...register("autor", { required: true })}
          />
          {errors.autor && <p>El autor es obligatorio</p>}
        </div>

        <div>
          <label htmlFor="precio">Precio</label>
          <input
            type="text"
            id="precio"
            {...register("precio", { required: true })}
          />
          {errors.precio && <p>El precio es obligatorio</p>}
        </div>

        <div>
          <label htmlFor="sinopsis">Sinopsis</label>
          <input
            type="text"
            id="sinopsis"
            {...register("sinopsis", { required: true })}
          />
          {errors.sinopsis && <p>La sinopsis es obligatorio</p>}
        </div>

        <div>
          <label htmlFor="categoria">Categoria</label>
          <input type="text" {...register("categoria", { required: true })} />
          {errors.categoria && <p>La categoria es obligatoria</p>}
        </div>

        <button type="submit">Crear Libro</button>
      </form>
    </>
  );
};
export default FormularioCrearLibro;
