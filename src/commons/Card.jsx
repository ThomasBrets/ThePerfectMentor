import React, { useEffect, useState } from "react";
import axios from "axios";

const mentorURL = "http://localhost:3001/api/users/search";

const Card = () => {
  const [mentor, setMentor] = useState(null);

  useEffect(() => {
    axios.get(mentorURL).then((response) => {
      setMentor(response.data);
    });
  }, []);
  if (!mentor) return null;

  return (
    <div>
      {mentor?.map((elemento) => (
        <div className="m-10 card lg:card-side bg-base-100 shadow-xl">
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
            <h2 className="card-title">{elemento.name} {elemento.lastName}</h2>
            <p>
              Conocimiento en JavaScript, por parte del back-end y front-end.
            </p>
            <p>Actualmente disponible</p>
            <p>Primer clase $500 pesos.</p>
            <p>Conocimiento previo HTML, CSS</p>
            <p>Paginas web, desarrollo de palicaciones.</p>

            <div className="card-actions justify-end">
              <a href="http://localhost:5173/single-page">
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
