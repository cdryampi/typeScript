import { useState, useEffect } from "react";
import { getPersonajes } from "../services/getPersonajes";
import { apiPaginationSkeleton } from "../constants/apiSkeleton";

export default function Personajes() {
  const [apiSchema, setApiSchema] = useState(apiPaginationSkeleton);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getPersonajes(apiPaginationSkeleton);
        setApiSchema(data);
      } catch (error) {
        console.error("Error al cargar personajes:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const cargarMas = async () => {
    try {
      const newSchema = await getPersonajes(apiSchema);
      setApiSchema({
        ...apiSchema,
        items: [...newSchema.items],
        meta: newSchema.meta,
        links: newSchema.links,
      });
    } catch (error) {
      console.error("Error cargando más personajes:", error);
    }
  };

  if (loading)
    return <p className="text-center text-gray-500">Cargando personajes...</p>;

  return (
    <div className="container mx-auto p-5 justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-15">
        {apiSchema.items.map((personaje) => (
          <div
            key={personaje.id}
            className="cursor-pointer bg-white shadow-lg rounded-lg overflow-hidden flex flex-col justify-center items-center p-5 :hover:shadow-2xl transition delay-300 ease-in-out"
          >
            <div className="text-white p-2 relative top-2 right-2 w-full h-40 flex justify-center items-center">
              <img
                className="object-contain object-center w-full h-full hover:scale-110 transition absolute inset"
                src={personaje.image}
                alt={personaje.name}
              />
            </div>

            <div className="p-4">
              <h1 className="text-2xl font-bold">{personaje.name}</h1>
              <p className="mt-2">{personaje.ki}</p>
              <p className="mt-2">{personaje.getDescripcion()}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={cargarMas}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-5"
      >
        Cargar más
      </button>
    </div>
  );
}
