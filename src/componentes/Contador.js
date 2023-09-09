import React from "react";
import '../hojas-de-estilo/Contador.css'

//en lugar de props se usa ({ })
function Contador({ numClics }) {
    return (
        <div className="contador">
            {numClics}
        </div>
    );
}

export default Contador;



