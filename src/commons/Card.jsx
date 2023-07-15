import React from "react";
import SingleCard from "./SingleCard";

const Card = ({ mentor }) => {
  return (
    <article
  class="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg"
>
  <img
    alt="Office"
    src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
    class="absolute inset-0 h-full w-full object-cover"
  />

  <div
    class="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64"
  >
    <div class="p-4 sm:p-6">
      <time datetime="2022-10-10" class="block text-xs text-white/90">
        10th Oct 2022
      </time>

      <a href="#">
        <h3 class="mt-0.5 text-lg text-white">
          How to position your furniture for positivity
        </h3>
      </a>

      <p class="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
        dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
        sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
        voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
        Molestias explicabo corporis voluptatem?
      </p>
    </div>
  </div>
</article>
    // <div>
    //   {mentor?.map((mentor) => (
    //     <div
    //       className="m-10 card lg:card-side bg-gray-700 shadow-xl"
    //       key={mentor._id}
    //     >
    //       <figure>
    //         <img
    //           src={mentor.photo}
    //           style={{
    //             width: 300,
    //             height: 300,
    //           }}
    //           alt="Album"
    //         />
    //       </figure>
    //       <div className="card-body">
    //         <h2 className="card-title text-3xl font-serif text-amber-500">
    //           {mentor.name} {mentor.lastName}
    //         </h2>
    //         <p className="text-amber-500 text-xl">
    //           Conocimiento en JavaScript, por parte del back-end y front-end.
    //         </p>
    //         <p className="text-amber-500 text-xl">Actualmente disponible</p>
    //         <p className="text-amber-500 text-xl">Primer clase $500 pesos.</p>
    //         <p className="text-amber-500 text-xl">
    //           Conocimiento previo HTML, CSS
    //         </p>
    //         <p className="text-amber-500 text-xl">
    //           Paginas web, desarrollo de aplicaciones.
    //         </p>

    //         <div className="card-actions justify-end">
    //           <a href="http://localhost:3000/single-card">
    //             <button className="btn btn-primary w-40 text-lg bg-amber-500 text-gray-700">
    //               Contactar
    //             </button>
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   ))}
    // </div>
  );
};

export default Card;
