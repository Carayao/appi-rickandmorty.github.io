import React, { useState } from 'react'


const Navbar = ({ setValorInput }) => {
  const [valorCaja, setValorCaja] = useState('');

  return (
    <div style={{backgroundImage: `url("https://p4.wallpaperbetter.com/wallpaper/712/644/866/starry-sky-stars-universe-violet-wallpaper-preview.jpg")` }}>
      <nav className="navbar" >
        <div className="container-fluid">

        <a href="/" style={{
            marginLeft: "60px",
          }}>
            <img style={{ maxHeight: "80px" }} src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/980px/public/media/image/2019/05/rick-morty-temporada-4-llegara-noviembre.jpg?itok=8gw8vLwS"></img>
          </a>


           <img style={{ maxHeight: "80px" }} src="https://hbomax-images.warnermediacdn.com/2022-08/tt.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com"></img>
        

          <form
            className="d-flex"
            
          >

            <input
              className="form-control me-2"
              type="search"
              placeholder="Búsqueda"
              aria-label="Search"
              onChange={(e) => setValorCaja(e.target.value)} />

            <button
              className="btn btn-outline-success"
              type="button"
              style={{ backgroundColor: "#7CFF01", color: "#3d373c" }}
              onClick={() => {setValorInput(valorCaja)}

              }>Buscar</button>
          </form>
        </div>
      </nav>
    </div>
  )
}

export default Navbar 