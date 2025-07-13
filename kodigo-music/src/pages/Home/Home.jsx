import React from 'react';
import { featuredAlbums } from '../../data/data';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Bienvenido a Kodigo Music</h1>
      <p>Explora millones de canciones, álbumes y podcasts.</p>

      {/* Sección de álbumes destacados */}
      <h2 className="section-title">Álbumes Destacados</h2>
      <div className="albums-grid">
        {featuredAlbums.map(album => (
          <div key={album.id} className="album-card">
            <img src={album.cover} alt={album.title} className="album-cover" />
            <div className="album-info">
              <h3 className="album-title">{album.title}</h3>
              <p className="album-artist">{album.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

