import React from "react";
import SingleCard from "./SingleCard";

const Card = ({ mentor }) => {
  return (
    <div>
      {mentor?.map((elemento) => (
        <div
          className="m-10  bg-stone-300 card lg:card-side bg-base-100 shadow-xl"
          key={elemento.id}
        >
          <figure>
            <img
              src={elemento.photo}
              style={{
                width: 300,
                height: 300,
              }}
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {elemento.name} {elemento.lastName}
            </h2>
            <p>
              Conocimiento en JavaScript, por parte del back-end y front-end.
            </p>
            <p>Actualmente disponible</p>
            <p>Primer clase $500 pesos.</p>
            <p>Conocimiento previo HTML, CSS</p>
            <p>Paginas web, desarrollo de aplicaciones.</p>

            <div className="card-actions justify-end">
              <a href="http://localhost:3000/single-card">
                <button className="btn btn-primary">Contactar</button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
