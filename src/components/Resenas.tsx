import React from 'react';
import { Quote } from 'lucide-react';

const testimonios = [
  {
    nombre: 'María Fernández',
    texto: 'Gracias al equipo de Justicia Lex pude resolver mi caso de forma rápida y justa. Siempre estuvieron disponibles y atentos a mis dudas.',
    rol: 'Cliente - Derecho Laboral',
    imagen: 'https://randomuser.me/api/portraits/women/68.jpg',
    link: 'https://goo.gl/maps/ficticio1',
    estrellas: 5,
  },
  {
    nombre: 'Carlos Gómez',
    texto: 'Me asesoraron con mi divorcio y todo el proceso fue mucho más claro y ordenado de lo que imaginaba. Excelente trato humano.',
    rol: 'Cliente - Derecho Civil',
    imagen: 'https://randomuser.me/api/portraits/men/45.jpg',
    link: 'https://goo.gl/maps/ficticio2',
    estrellas: 4,
  },
  {
    nombre: 'Luciana Pérez',
    texto: 'Tuve un accidente y lograron que la ART se hiciera responsable. Estoy muy agradecida por el compromiso y profesionalismo.',
    rol: 'Cliente - ART y Tránsito',
    imagen: 'https://randomuser.me/api/portraits/women/12.jpg',
    link: 'https://goo.gl/maps/ficticio3',
    estrellas: 5,
  }
];

const renderStars = (count: number) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span
        key={i}
        className={`me-1 ${i <= count ? 'text-warning' : 'text-secondary'}`}
        style={{ fontSize: '1.1rem' }}
      >
        ★
      </span>
    );
  }
  return stars;
};

const Resenas: React.FC = () => {
  return (
    <section id="resenas" className="py-5 bg-white text-dark">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 font-weight-bold">Opiniones de quienes confiaron en nosotros</h2>
          <p className="lead text-muted">Testimonios reales, confianza genuina.</p>
          <p className="text-muted fst-italic mt-3">
            En Justicia Lex nos enorgullece acompañar a nuestros clientes con profesionalismo y dedicación. 
            Aquí compartimos algunas de sus experiencias.
          </p>
        </div>

        <div className="row">
          {testimonios.map((testimonio, index) => (
            <div className="col-md-4 mb-4 d-flex" key={index}>
              <a
                href={testimonio.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card card-hover-effect shadow-sm border-0 p-4 w-100 d-flex flex-column text-decoration-none text-dark"
                style={{ cursor: 'pointer' }}
              >
                <div className="d-flex align-items-center mb-3">
                  <img
                    src={testimonio.imagen}
                    alt={testimonio.nombre}
                    className="rounded-circle me-3"
                    style={{ width: '60px', height: '60px', objectFit: 'cover', border: '2px solid #0d6efd' }}
                  />
                  <div>
                    <h6 className="mb-0 font-weight-bold">{testimonio.nombre}</h6>
                    <small className="text-muted">{testimonio.rol}</small>
                    <div className="mt-1">{renderStars(testimonio.estrellas)}</div>
                  </div>
                </div>

                <Quote size={32} className="text-primary mb-3" />
                <p className="text-muted" style={{ fontStyle: 'italic' }}>
                  “{testimonio.texto}”
                </p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resenas;
