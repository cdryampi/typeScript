import { APISchema } from "../models/APISchema";
import Personaje from "../models/Personaje";

import { config } from "../config";
export const getPersonajes = async (apiSchema: APISchema) => {
  const response_link = `${config.API}characters/?page=${apiSchema.meta.currentPage}&limit=${config.LIMIT}`;
  if (apiSchema.links.next === "") {
    apiSchema.links.next = response_link;
  }
  try {
    const response = await fetch(new URL(apiSchema.links.next.toString()));
    const data = await response.json();
    apiSchema.meta = data.meta;
    apiSchema.links = data.links;

    data.items.map((personaje: Personaje) => {
      // Crear un nuevo personaje y agregarlo al array de personajes si no existe
      const aux_personaje = new Personaje(
        personaje.id,
        personaje.name,
        personaje.race,
        personaje.gender,
        personaje.ki,
        personaje.maxKi,
        personaje.affiliation,
        personaje.description,
        personaje.image
      );

      if (apiSchema.items.find((p: Personaje) => p.id === aux_personaje.id)) {
        console.log("Personaje ya existe");
      } else {
        apiSchema.items.push(aux_personaje);
      }
    });

    return apiSchema;
  } catch (error) {
    console.log("Error en la petición a la API de personajes: ", error);
    return apiSchema;
  }
};
