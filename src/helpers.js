export const revisarPresupuesto = (presupuesto, restante, cantidad) => {
    let clase;

    if( (presupuesto / 4) > restante ) {
        clase = "alert alert-danger"
    }else if ( (presupuesto / 2) > restante) {
        clase = "alert alert-warning";
    }else if(restante < presupuesto) {
        clase= "alert alert-success";
    }
    
    return clase 
}