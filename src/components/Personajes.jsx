import { useState, useEffect } from "react";
import { getPersonajes } from "../services/getPersonajes";
import { apiPaginationSkeleton } from "../constants/apiSkeleton";
import PersonajeComponent from "./PersonajeComponent";

export default function Personajes() {
  const [apiSchema, setApiSchema] = useState(apiPaginationSkeleton);
  const [loading, setLoading] = useState(true);
  const [end, setEnd] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        apiSchema.clearItems();
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

    console.log(apiSchema.meta);
    if (apiSchema.meta.currentPage === apiSchema.meta.totalPages) {
      console.log("No hay más personajes");
      setEnd(true);
    }
  };

  if (loading)
    return <p className="text-center text-gray-500">Cargando personajes...</p>;

  return (
    <div className="container mx-auto p-5 justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-15">
        {apiSchema.items.map((personaje) => (
          <PersonajeComponent key={personaje.id} personaje={personaje} />
        ))}
      </div>

      <button
        onClick={cargarMas}
        className={`bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-full mt-5 cursor-pointer ${
          end ? "hidden" : ""
        }`}
        disabled={end}
      >
        Cargar más
      </button>
    </div>
  );
}
