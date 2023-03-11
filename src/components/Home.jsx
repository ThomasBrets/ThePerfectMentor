import React from 'react'

const Home = () => {
  return (
    <div className="m-10 card lg:card-side bg-base-100 shadow-xl">
    <figure><img src="https://i.scdn.co/image/ab67616d00001e02dacce52840e9ad6c572ef173" alt="Album"/></figure>
    <div className="card-body">
      <h2 className="card-title">Salio el nuevo album de Obie wanshot!</h2>
      <p>Escuchalo pa, no tiene buen flow ni buenas barras pero las bases estan epicas.</p>
      <div className="card-actions justify-end">
      <a href="https://open.spotify.com/album/4w6yFXp0Mx0NyrLNEl7Jts" target="_blank">
        <button className="btn btn-primary" >Escuchar</button>
        </a>
      </div>
    </div>
  </div>
)
}

export default Home