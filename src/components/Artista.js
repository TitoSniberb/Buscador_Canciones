import React from 'react';

const Artista = ({artista}) => {
    if( Object.keys(artista).length === 0) return null;

    const { strArtistThumb, strGenre, strBiographyEN } = artista;
    
    return ( 
        <div className="card border-light">
            <div className="card-header bg-primary text-light font-weight-bold">
                Informacion Artista
            </div>
            <div className="body">
                <img src={strArtistThumb} alt="Logo artista" />
                <p className="card-text">Genero: {strGenre} </p>
                <h2 className="card-text">Biografia:  </h2>
                <p className="card-text">{strBiographyEN} </p>
                <p className="card-text">
                    <a href={`https://${artista.strFacebook}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>

                    <a href={`https://${artista.strTwitter}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>

                    <a href={`${artista.strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-lastfm"></i>
                    </a>
                </p>
            </div>
        </div>    
    );
}
 
export default Artista;