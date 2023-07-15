import React from "react";
import SingleCard from "./SingleCard";

const Card = ({ mentor }) => {
  return (
    <div>
      {mentor?.map((mentor) => (
        <div
          className="m-10 card lg:card-side bg-gray-700 shadow-xl"
          key={mentor._id}
        >
          <figure>
            <img
              src={mentor.photo}
              style={{
                width: 300,
                height: 300,
              }}
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl font-serif text-amber-500">
              {mentor.name} {mentor.lastName}
            </h2>
            <p className="text-amber-500 text-xl">
              Conocimiento en JavaScript, por parte del back-end y front-end.
            </p>
            <p className="text-amber-500 text-xl">Actualmente disponible</p>
            <p className="text-amber-500 text-xl">Primer clase $500 pesos.</p>
            <p className="text-amber-500 text-xl">
              Conocimiento previo HTML, CSS
            </p>
            <p className="text-amber-500 text-xl">
              Paginas web, desarrollo de aplicaciones.
            </p>

            <div className="card-actions justify-end">
              <a href="http://localhost:3000/single-card">
                <button className="btn btn-primary w-40 text-lg bg-amber-500 text-gray-700">
                  Contactar
                </button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
