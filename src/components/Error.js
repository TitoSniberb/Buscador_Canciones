import React from 'react';

const Error = ({mensaje}) => {
    return ( 
        <p className="alert alert-danger text-center p-2 mt-2">
            {mensaje}
        </p>
     );
}
 
export default Error;