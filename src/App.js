import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Cancion from './components/Cancion';
import Artista from './components/Artista';
import Axios from 'axios';

function App() {

  const [ busquedaletra, setBusquedaLetra ] = useState({})
  const [ letra, setLetra ] = useState('');
  const [ artista, setArtista ] = useState({});

  useEffect(() => {
    if( Object.keys(busquedaletra).length === 0 ) return;

    const consultarAPILetra = async () => {
      const { artista, cancion } = busquedaletra;
      const lyrics = `https://api.lyrics.ovh/v1/${artista}/${cancion}`
      const compositor = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`

      const [ letra, informacion ] = await Promise.all([
        Axios(lyrics),
        Axios(compositor)
      ]);

      setLetra(letra.data.lyrics);
      setArtista(informacion.data.artists[0])
      console.log(informacion)

    }
    consultarAPILetra();

  }, [busquedaletra])

  return (
    <Fragment>
      <Formulario 
        setBusquedaLetra={setBusquedaLetra}
      />

      <div className="container mt-5">
        <div className="row">

          <div className="col-md-6">
            <Artista 
              artista={artista}
            />
          </div>

          <div className="col-md-6">
            <Cancion
              letra={letra}
            />
          </div>

        </div>
      </div>
    </Fragment>
  );
}

export default App;
