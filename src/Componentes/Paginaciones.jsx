import React, { useState } from 'react'

const Paginaciones = ({ setPagina }) => {
    const [pagActual, setPagActual] = useState(1);
    console.log(setPagina)

    return (
        <div style={{display: "flex", paddingTop:"10px", justifyContent: 'center', backgroundImage: `url("https://p4.wallpaperbetter.com/wallpaper/712/644/866/starry-sky-stars-universe-violet-wallpaper-preview.jpg")`}}>
            <button
                className="btn btn-outline-success"
                type="button"
                style={{ backgroundColor: "#7CFF01", color: "#3d373c", marginRight:'10px'}}
                onClick={() => { setPagActual(pagActual -1) }}>Anterior</button>
            
            <span style={{color:"#7CFF01", paddingRight:"5px", fontWeight: "bold" }}> Pagina</span>
            <span style={{color:"#7CFF01", fontWeight: "bold" }} onChange={(e) => setPagina(e.target.value)}>{pagActual} </span>


            <button
                className="btn btn-outline-success"
                type="button"
                style={{ backgroundColor: "#7CFF01", color: "#3d373c", marginLeft:'10px' }}
                onClick={() => { setPagActual(pagActual +1) }}>Siguiente</button>


        </div>
    )
}

export default Paginaciones 