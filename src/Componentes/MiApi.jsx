import React, { useState, useEffect } from 'react'

const MiApi = ({ valorInput, pagina }) => {

  const [informacion, setInformacion] = useState([]);
  
  const [listaFiltrada, setListaFiltrada] = useState([]);
  listaFiltrada.sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0));

  

  useEffect(() => {
    //callback

    apiRickAndMorty();

  }, []) //dependencias

  
  useEffect(() => {

    ApiFiltrada();
    console.log(listaFiltrada)
  }, [valorInput]
  )

  function listaRender() {
    return listaFiltrada.length === 0 ? informacion : listaFiltrada;
  }

  async function apiRickAndMorty() {
    const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${pagina}`)
    const data = await res.json()
    console.log(data.results);
    setInformacion(data.results);
  }

  

  async function ApiFiltrada() {
    const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${valorInput}`)
    const data = await res.json()
    console.log(valorInput)
    console.log(data.results);
    setListaFiltrada(data.results)
  }

  return (
    

    <div style={{ backgroundImage: `url("https://p4.wallpaperbetter.com/wallpaper/712/644/866/starry-sky-stars-universe-violet-wallpaper-preview.jpg")` }}>

      
      <div className='row' style={{displey:"flex", justifyContent: 'space-around'}}>

        {listaRender().map((item, index) => (
          
          <div style={{
            display: "flex",
            width: "250px",
            padding: "2px",
            backgroundColor: "#01FFF4",
            marginTop: "30px",
            marginLeft: "60px",
            marginRight: "60px",
            borderRadius: "5px",
            
          }}>


            <div key={index} className="col" >
              <div
                className='card'
                style={{ backgroundColor: "#24325FFF", color: "#A6EEE6FF", minHeight: "420px" }}>

                <img src={item.image} className="card-img-top" alt="imagen personaje" />

                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">Especie: {item.species}</p>

                  <a href="/" className="btn btn-outline-success"
                    style={{ backgroundColor: "#7CFF01", color: "#3d373c" }}>Ver más</a>

                </div>
              </div>
            </div>
          </div>

        ))
        }


      </div >
    </div>

  )


}

export default MiApi



