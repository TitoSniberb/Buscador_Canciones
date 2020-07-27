import React, { useState } from 'react';
import Error from './Error';

const Formulario = ({setBusquedaLetra}) => {

    const [ busqueda, setBusqueda ] = useState({
        artista: '',
        cancion: ''
    });
    const [ error, setError ] = useState(false);

    const { artista, cancion } = busqueda;

    const actualizarState = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        });
    };

    const buscarInformacion = e => {
        e.preventDefault();

        if(artista.trim() === '' || cancion.trim() === '') {
            setError(true);
            return;
        };

        setError(false);
        setBusquedaLetra(busqueda);
    }

    return ( 
        <div className="bg-info">
            <div className="container pt-2">

                { error ? <Error mensaje="Todos los campos son obligatorios" /> : null}

                <div className="row">

                    <form
                        onSubmit={buscarInformacion}
                        className="col card text-white bg-transparent mb-5 pt-4 pb-2"
                    >
                        <fieldset>
                            <legend className="text-center">Buscador letras canciones</legend>
                        
                            <div className="row">

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artista</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="artista"
                                            placeholder="Nombre artista"
                                            onChange={actualizarState}
                                            value={artista}
                                        />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Cancion</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="cancion"
                                            placeholder="Nombre cancion"
                                            onChange={actualizarState}
                                            value={cancion}
                                        />
                                    </div>
                                </div>

                            </div>

                            <button 
                                type="submit"
                                className="btn btn-primary float-right"
                            >Buscar</button>
                        </fieldset>
                    </form>
                    
                </div>
            </div>
        </div>
     );
}
 
export default Formulario;