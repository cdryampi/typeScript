import { APISchema } from "../models/APISchema";
import Personaje from "../models/Personaje";

import Transformation from "../models/Transformation";
import { OriginPlanet } from "../models/OriginPlanet";

import { config } from "../config";

// Función que realiza la petición a la API de personajes
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

export const getPersonaje = async (name_: string): Promise<Personaje> => {
  let personaje: Personaje = new Personaje(0, "", "", "", 0, 0, "", "", "");

  try {
    const response = await fetch(`${config.API}characters/${name_}`);
    const data = await response.json();
    personaje.affiliation = data.affiliation;
    personaje.description = data.description;
    personaje.id = data.id;
    personaje.image = data.image;
    personaje.ki = data.ki;
    personaje.maxKi = data.maxKi;
    personaje.name = data.name;
    personaje.race = data.race;
    personaje.gender = data.gender;
    const originPlanet = new OriginPlanet(
      data.originPlanet.id,
      data.originPlanet.name,
      data.originPlanet.isDestroyed,
      data.originPlanet.description,
      data.originPlanet.image
    );
    personaje.setOriginPlanet(originPlanet);

    data.transformations.map((transformation: Transformation) =>
      personaje.pushTransformation(
        new Transformation(
          transformation.id,
          transformation.name,
          transformation.image,
          transformation.ki
        )
      )
    );
  } catch (error) {
    console.log("Error en la petición a la API de personajes: ", error);
    return personaje;
  }
  return personaje;
};

export const getPersonajesByGender = async (
  gender_: string
): Promise<Array<Personaje>> => {
  let personajes: Array<Personaje> = [];

  try {
    const url_pi = `${config.API}characters?gender=${gender_}`;
    const response = await fetch(url_pi);
    const data = await response.json();
    data.map((personaje: Personaje) => {
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
      personajes.push(aux_personaje);
    });
  } catch (error) {
    console.log("Error en la petición a la API de personajes: ", error);
    return personajes;
  }
  return personajes;
};

export const getPersonajesByRace = async (
  race_: string
): Promise<Array<Personaje>> => {
  let personajes: Array<Personaje> = [];

  try {
    const url_pi = `${config.API}characters?race=${race_}`;
    const response = await fetch(url_pi);
    const data = await response.json();
    data.map((personaje: Personaje) => {
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
      personajes.push(aux_personaje);
    });
  } catch (error) {
    console.log("Error en la petición a la API de personajes: ", error);
    return personajes;
  }
  return personajes;
};

export const getPersonajesByAffiliation = async (
  affiliation_: string
): Promise<Array<Personaje>> => {
  let personajes: Array<Personaje> = [];

  try {
    const url_pi = `${config.API}characters?affiliation=${affiliation_}`;
    const response = await fetch(url_pi);
    const data = await response.json();
    data.map((personaje: Personaje) => {
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
      personajes.push(aux_personaje);
    });
  } catch (error) {
    console.log("Error en la petición a la API de personajes: ", error);
    return personajes;
  }
  return personajes;
};
