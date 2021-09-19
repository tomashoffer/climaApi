import React from 'react';
import PropTypes from 'prop-types';

const Clima = ({resultado}) => {
    
    // extraer los valores
    const {name, main} = resultado;
    console.log(resultado);

    // sino null cada vez que cargue no va a tener resultado, por lo tanto da error
    if(!name) return null;
    // resultados en farengeit, hay que restar kelvin
    const kelvin = 273.15;
    return ( 
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>The weather of {name} is</h2>
                <p className="temperatura">
                    { parseFloat(main.temp - kelvin, 10).toFixed(2) } <span>&#x2103;</span>  
                </p>
                <p>Maximum Temperature:
                    { parseFloat(main.temp_max - kelvin, 10).toFixed(2) } <span>&#x2103;</span>  
                </p>
                <p>Minimum Temperature:
                    { parseFloat(main.temp_min - kelvin, 10).toFixed(2) } <span>&#x2103;</span>  
                </p>
            </div>
        </div>
        
     );
}
 
Clima.propTypes = {
    resultado: PropTypes.object.isRequired
}

export default Clima;