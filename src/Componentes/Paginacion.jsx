import React, { useState, useEffect } from 'react'

//NO UTILIZADO, ERA MI OPCIÓN 2

const Paginacion = ({ paginacion }) => {


    const [pagSig, setPagSig] = useState([]);


    useEffect(() => {
        apiRickSigPag();

    }, []) 

    async function apiRickSigPag() {
        const res = await fetch("https://rickandmortyapi.com/api/character")
        const data = await res.json()
        console.log(data.info);
        setPagSig(data.info);
    }

    apiRickSigPag()

    return (
        <div >

            {pagSig().map((item, pag) => (
                <div style={{
                    display: "flex",
                    width: "250px",
                    padding: "10px",
                    backgroundColor: "#83D2E4",
                    marginTop: "30px",
                    marginLeft: "80px"
                }}>


                    <button onClick={item.prev} className="btn btn-outline-success" type="button"
                        style={{ backgroundColor: "#8BCF21", color: "#3d373c" }}> Anterior</button>

                    <button onClick={item.next} className="btn btn-outline-success" type="button"
                        style={{ backgroundColor: "#8BCF21", color: "#3d373c" }}> Siguiente</button>

                </div >
            ))
            }
        </div>

    )


}
export default Paginacion

