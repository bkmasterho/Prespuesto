import React, { useState } from 'react';
import Error from './Error';
import shortid from "shortid";
import PropTypes from "prop-types";



const Formulario = ({guardarCrearGasto, guardarGasto, restante}) => {
    
    const [nombre, guardarNombre] = useState(""); 
    const [cantidad, guardarCantidad] = useState(0);
    const [error, saveError] = useState(false);
    
   
    
   //funcion que lee el gasto

const definirGastos = e => { 
       guardarNombre(e.target.value)

   }

   const definirCantGastos = e => {
    guardarCantidad(parseInt(e.target.value,10))

   }
    
    // cuando el usuario agrega un gasto 
    const agregarGasto = e => {
        e.preventDefault();
    
    
   //Validar
    
   if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === ""){
        saveError(true);
        return;

    } 
    
    saveError(false);

    //Construir el gasto

    const gasto = {
        nombre,
        cantidad,
        id:shortid.generate()

    }

   //Pasar el gasto al componente principal
    guardarGasto(gasto);
    guardarCrearGasto(true);

    //Resetear el Form
    guardarNombre("");
    guardarCantidad(0);

}
    return ( 
                
                <form
                onSubmit={agregarGasto}
                
                >
                    <h2> Agrega tus gastos aqui </h2>
                    
                    
                { error ? <Error mensaje=" Ambos campos son obligatorios o presupuesto incorrectos"/> : null }
            
                            <div className="campo"> 
                            <label> Nombre gasto</label>
                                <input
                                type="text"
                                className="u-full-width"
                                placeholder="Ej.Transporte"
                                value={nombre}
                                onChange={definirGastos}
                                
                                />
                            </div>
                                    


                                <div className="campo"> 
                            <label> Cantidad Gasto </label>
                                <input
                                type="number"
                                className="u-full-width"
                                placeholder="Ej.300"
                                value={cantidad}
                                onChange={definirCantGastos}
                                />


                                    </div>

                                        <input
                                        type="submit"
                                        className="button-primary u-full-width"
                                        value="Agregar Gastos"
                                        
                                        />
                            
                        </form>
                

     );
}

Formulario.propTypes = {
    guardarGasto: PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.number.isRequired
    
}
 
export default Formulario;