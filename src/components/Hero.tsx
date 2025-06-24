// src/components/Hero.tsx
import React from 'react'

const Hero: React.FC = () => {
  return (
    <section
      className="d-flex align-items-center text-white"
      style={{
        height: '100vh',
        backgroundImage: `url('https://images.pexels.com/photos/6077181/pexels-photo-6077181.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div className="container text-center px-4" style={{ maxWidth: '800px' }}>
        <h1 className="display-3 fw-bold mb-4" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.7)' }}>
          JUSTICIA LEX
        </h1>
        <p
          className="lead fs-4 mb-4"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            padding: '1rem',
            borderRadius: '8px',
            textShadow: 'none',
          }}
        >
          En nuestro Estudio Jurídico, su caso es nuestra prioridad. Nuestros socios y colaboradores están comprometidos
          con la excelencia y han representado a nuestros clientes con éxito desde el año 2000. Tenemos sedes en CABA y
          Provincia de Buenos Aires.
        </p>

        <a
          href="#contacto"
          className="btn btn-light btn-lg fw-semibold px-4 py-2 shadow-sm hero-contact-btn"
          style={{
            borderRadius: '30px',
            transition: 'all 0.3s ease',
          }}
        >
          Contactanos
        </a>
      </div>
    </section>

    /*
        <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
    
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://thundercloud.com/wp-content/uploads/2014/07/1200x400.gif"
                className="d-block w-100"
                alt="Imagen 1"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Título 1</h5>
                <p>Descripción para la imagen 1.</p>
              </div>
            </div>
    
            <div className="carousel-item">
              <img
                src="https://thundercloud.com/wp-content/uploads/2014/07/1200x400.gif"
                className="d-block w-100"
                alt="Imagen 2"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Título 2</h5>
                <p>Descripción para la imagen 2.</p>
              </div>
            </div>
    
            <div className="carousel-item">
              <img
                src="https://thundercloud.com/wp-content/uploads/2014/07/1200x400.gif"
                className="d-block w-100"
                alt="Imagen 3"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Título 3</h5>
                <p>Descripción para la imagen 3.</p>
              </div>
            </div>
          </div>
    
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Anterior</span>
          </button>
    
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Siguiente</span>
          </button>
        </div>
        */
  )
}

export default Hero
