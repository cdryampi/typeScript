const PersonajeComponent = ({ personaje }) => {
  return (
    <a
      href={`/personaje/${personaje.id}`}
      className="cursor-pointer bg-white shadow-lg rounded-lg overflow-hidden flex flex-col justify-center items-center p-5 hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105"
    >
      {/* Imagen */}
      <div className="relative w-full h-80 flex justify-center items-center">
        <img
          className="object-contain object-center w-full h-full hover:scale-110 transition duration-500 ease-in-out absolute inset-0"
          src={personaje.image}
          alt={personaje.name}
        />
      </div>

      {/* Información */}
      <div className="p-4 flex flex-col justify-center items-center font-bold text-center">
        <h1 className="text-3xl font-bold text-primary-500">
          {personaje.name}
        </h1>

        <p className="mt-2 text-lg text-gray-700">
          <span className="text-amber-600">Raza:</span> {personaje.race} -{" "}
          {personaje.gender}
        </p>

        <p className="mt-2 text-2xl text-gray-800">Base Ki:</p>
        <p className="text-xl text-amber-600">{personaje.ki}</p>

        <p className="mt-2 text-2xl text-gray-800">Total KI:</p>
        <p className="text-xl text-amber-600">{personaje.maxKi}</p>

        <p className="mt-2 text-2xl text-gray-800">Afiliación:</p>
        <p className="text-xl text-amber-600">{personaje.affiliation}</p>
      </div>
    </a>
  );
};

export default PersonajeComponent;
