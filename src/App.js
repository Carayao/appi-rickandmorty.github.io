import { useState } from "react";
import Navbar from "./Componentes/Navbar.jsx";
import MiApi from "./Componentes/MiApi.jsx";
import Paginaciones from "./Componentes/Paginaciones.jsx";
//import Paginacion from "./Componentes/Paginacion.jsx";




function App() {
  
  const [valorInput, setValorInput] = useState('');
  const [pagina, setPagina] = useState('');
  //const [pagSig, setPagSig] = useState('');
  
  

  return (
    <div className="App" >
      <Navbar setValorInput={setValorInput}></Navbar>
      
      <Paginaciones setPagina={setPagina}></Paginaciones>
      
      <MiApi valorInput={valorInput} pagina={pagina}></MiApi>

      
     
      
    </div>
  );
}

export default App;
