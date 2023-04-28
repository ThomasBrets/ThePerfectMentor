import React, { useState } from 'react';

const Publicar = () => {
  const [tecnologias, setTecnologias] = useState('');
  const [precio, setPrecio] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes hacer algo con los valores de los campos
    console.log(tecnologias, precio, descripcion);
  };

  return (
    <div className="max-w-md pb-40 pt-20 mx-auto">
      <h2 className="text-2xl font-bold mb-4">Publicar</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="tecnologias" className="block font-bold mb-2">
            Tecnologías
          </label>
          <input
            type="text"
            id="tecnologias"
            className="w-full border border-gray-400 p-2 rounded-lg"
            value={tecnologias}
            onChange={(event) => setTecnologias(event.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="precio" className="block font-bold mb-2">
            Precio
          </label>
          <input
            type="text"
            id="precio"
            className="w-full border border-gray-400 p-2 rounded-lg"
            value={precio}
            onChange={(event) => setPrecio(event.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="descripcion" className="block font-bold mb-2">
            Descripción
          </label>
          <textarea
            id="descripcion"
            className="w-full border border-gray-400 p-2 rounded-lg"
            value={descripcion}
            onChange={(event) => setDescripcion(event.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
        >
          Publicar
        </button>
      </form>
    </div>
  );
};

export default Publicar;