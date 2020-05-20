import React, {Fragment} from 'react';
import { revisarPresupuesto } from "../helpers";
import PropTypes from "prop-types";

const ControlPresupuesto = ({presupuesto,restante,cantidad}) => {
    


    return (  
        <Fragment>
              <div className="alert alert-primary">
                Presupuesto: $ {presupuesto}

            </div>

                <div className={revisarPresupuesto(presupuesto, restante,cantidad)}> 
                
                Restante: $ {restante}
            </div>
            
        </Fragment>
    );
}
ControlPresupuesto.propTypes = {
    presupuesto: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired
    
}
 
export default ControlPresupuesto;