import React from 'react'
import { Briefcase, Gavel, Users, ShieldCheck } from 'lucide-react'

const especialidades = [
  {
    icon: <Gavel size={40} className="text-primary mb-3" />,
    titulo: 'Derecho Penal y Civil',
    subtitulo: 'Años de experiencia',
    descripcion:
      'Brindamos asesoría en defensa de imputados y asistencia a víctimas de delitos. También somos especialistas en Derecho Civil: divorcios, sucesiones, desalojos y más. Contactanos hoy mismo para conocer cómo podemos ayudarte.'
  },
  {
    icon: <Briefcase size={40} className="text-primary mb-3" />,
    titulo: 'Derecho Laboral',
    subtitulo: 'Justicia para usted',
    descripcion:
      'Contamos con un equipo experto en Derecho Laboral para acompañarte en conflictos con empleadores, despidos injustificados, reclamos salariales y otros derechos laborales.'
  },
  {
    icon: <ShieldCheck size={40} className="text-primary mb-3" />,
    titulo: 'Accidentes de Tránsito y ART',
    subtitulo: 'Éxito demostrado',
    descripcion:
      'Con amplia experiencia en reclamos por accidentes y ART, nuestro equipo está preparado para conseguir la compensación que merecés. Casos resueltos con agilidad y eficiencia nos respaldan.'
  },
  {
    icon: <Users size={40} className="text-primary mb-3" />,
    titulo: 'Derecho del Consumidor',
    subtitulo: 'Años de experiencia',
    descripcion:
      'Defendemos tus derechos como consumidor frente a abusos, cobros indebidos, contratos engañosos o productos defectuosos. Hacé valer tus derechos con nuestro asesoramiento personalizado.'
  }
]

const Especialidades: React.FC = () => {
  return (
    <section id="servicios" className="py-5 bg-light text-dark">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 font-weight-bold">Áreas de especialidad</h2>
          <p className="lead text-muted">¿En qué podemos ayudarte?</p>
        </div>
        <div className="row">
          {especialidades.map((area, index) => (
            <div className="col-md-6 col-lg-3 mb-4 d-flex" key={index}>
              <div className="card card-hover-effect shadow-sm border-0 w-100 text-center p-4 h-100">
                <div>{area.icon}</div>
                <h5 className="mt-3 font-weight-bold">{area.titulo}</h5>
                <h6 className="text-muted">{area.subtitulo}</h6>
                <p className="mt-2 small">{area.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Especialidades
