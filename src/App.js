import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import logoContador from './imagenes/contador-2.jpg';
import { useState } from 'react';
//el useState es un hook

function App() {
  const [numClics, setNumClics] = useState(0); 

  const manejarClic = () => {
    setNumClics (numClics + 1);
    //console.log("Clic");
  }

  const reiniciarContador = () => {
    setNumClics(0);
    //console.log("Reiniciar");
  }

  return (
    <div className="App">
   <div className='freecodecamp-logo-contenedor'>
    <img 
      className='freecodecamp-logo'
      src={logoContador}
      alt='Logo freeCodeCamp'/>

   </div>
   <div className='contenedor-principal'>
    <Contador numClics= {numClics} />
    <Boton
    texto='Clic'
    esBotonDeClic={true}
    manejarClic={manejarClic}/>
    <Boton
    texto='Reiniciar'
    esBotonDeClic={false}
    manejarClic={reiniciarContador}
    />
   </div>
    </div>
  );
}

export default App;
