import React, { useState } from 'react'

const Personaje = () => {

    const [detalle, setDetalle] = useState([]);

    seEffect(() => {
        //callback

        apiRickAndMorty();

    }, []) //dependencias

    async function apiRickAndMorty() {
        const res = await fetch(`https://rickandmortyapi.com/api/character`)
        const data = await res.json()
        console.log(data.results);
        setDetalle(data.results);

        return (
            <div>
                {detalle().map((item, index) => (

                    <div style={{
                        display: "flex",
                        width: "250px",
                        padding: "2px",
                        backgroundColor: "#01FFF4",
                        marginTop: "30px",
                        marginLeft: "60px",
                        marginRight: "60px",
                        borderRadius: "5px"
                    }}
                    </div>

                    <div key={index} className="col" >
              <div
                className='card'
                style={{ backgroundColor: "#24325FFF", color: "#A6EEE6FF", minHeight: "420px" }}>

                <img src={item.image} className="card-img-top" alt="imagen personaje" />

                        ))}
            </div>
            
                
            
              

export default Personaje