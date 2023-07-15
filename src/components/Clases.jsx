import React from "react";

const Clases = () => {
  //
  return (
    <div className="flex m-20">
      <div class="card mx-5 w-96 bg-base-200 shadow-xl">
        <figure>
          <img
            className="mt-5"
            src="https://esemanal.mx/revista/wp-content/uploads/2019/12/Mukund-Seetharaman-300x300.jpg"
            alt="Shoes"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">
            Matud Halla
            <div class="badge badge-secondary">Más reciente</div>
          </h2>
          <p>
            Tenes clase con Matud Halla: <b>15/04/2023</b>
          </p>
          <div class="card-actions justify-end">
            <div class="badge badge-outline">JavaScript</div>
            <div class="badge badge-outline">Back-end</div>
          </div>
        </div>
      </div>
      <div class="card mx-5 w-96 bg-base-200 shadow-xl">
        <figure>
          <img
            className="mt-5"
            src="https://www.rdstation.com/wp-content/uploads/2017/05/julio_paulilio-300x300.jpg"
            alt="Shoes"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">El Mas Capito</h2>
          <p>
            Tenes clase con El Mas Capito: <b>18/04/2023</b>{" "}
          </p>
          <div class="card-actions justify-end">
            <div class="badge badge-outline">Vue</div>
            <div class="badge badge-outline">Front-end</div>
          </div>
        </div>
      </div>
      <div class="card mx-5 w-96 bg-base-200 shadow-xl">
        <figure>
          <img
            className="mt-5"
            src="https://www.rdstation.com/wp-content/uploads/2017/05/julio_paulilio-300x300.jpg"
            alt="Shoes"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">El Mas Capito</h2>
          <p>
            Tenes clase con El Mas Capito: <b>20/04/2023</b>
          </p>
          <div class="card-actions justify-end">
            <div class="badge badge-outline">React</div>
            <div class="badge badge-outline">Front-end</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clases;
