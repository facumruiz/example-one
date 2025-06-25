import React from 'react';
import { BookOpen } from 'lucide-react';
import './Blogs.css'; 

const posts = [
  {
    titulo: '¿Qué hacer ante un despido injustificado?',
    resumen: 'Te explicamos los pasos clave si creés que fuiste despedido sin causa justa. Reclamá tus derechos.',
    imagen: 'https://dummyimage.com/600x400/4a4a4a/ffffff',
    link: '/blog/despido-injustificado',
    categoria: 'Derecho Laboral',
    fecha: 'Mayo 2024'
  },
  {
    titulo: 'Guía práctica sobre divorcios en Argentina',
    resumen: 'Conocé el proceso, costos y tiempos del divorcio según la ley actual. Asesoramiento claro.',
    imagen: 'https://dummyimage.com/600x400/4a4a4a/ffffff',
    link: '/blog/divorcios-argentina',
    categoria: 'Derecho Civil',
    fecha: 'Abril 2024'
  },
  {
    titulo: 'Responsabilidad de las ART en accidentes laborales',
    resumen: 'Casos reales donde logramos que la ART reconozca su responsabilidad y actúe como corresponde.',
    imagen: 'https://dummyimage.com/600x400/4a4a4a/ffffff',
    link: '/blog/art-accidentes',
    categoria: 'ART y Riesgos',
    fecha: 'Marzo 2024'
  },
];

const Blogs: React.FC = () => {
  return (
    <section id="blogs" className="py-5 bg-light text-dark">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">Casos de estudio y Artículos</h2>
          <p className="lead text-muted">Historias reales y consejos legales prácticos.</p>
          <p className="text-muted fst-italic mt-3">
            Compartimos nuestra experiencia para ayudarte a entender tus derechos y cómo actuamos desde Justicia Lex.
          </p>
        </div>

        <div className="row">
          {posts.map((post, index) => (
            <div className="col-md-4 mb-4 d-flex" key={index}>
              <a
                href={post.link}
                className="card card-hover-effect shadow-sm border-0 text-decoration-none text-dark w-100 d-flex flex-column"
                style={{ cursor: 'pointer' }}
              >
                <img
                  src={post.imagen}
                  alt={post.titulo}
                  className="card-img-top"
                  style={{ height: '180px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column justify-content-between">
                  <div className="mb-2">
                    <small className="text-primary text-uppercase fw-bold">{post.categoria}</small>
                    <h5 className="fw-bold mt-2">{post.titulo}</h5>
                    <p className="text-muted small">{post.resumen}</p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <small className="text-muted">{post.fecha}</small>
                    <BookOpen size={20} className="text-primary" />
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
