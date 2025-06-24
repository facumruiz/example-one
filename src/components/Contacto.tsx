// src/components/Contacto.tsx
import React from 'react'

const Contacto: React.FC = () => {
  return (
    <section id="contacto" className="py-5 bg-light">
      <div className="container" style={{ maxWidth: '900px' }}>
        <h2 className="display-5 font-weight-bold text-center mb-5">Contacto</h2>
        <div className="row gx-5 gy-4 align-items-start">
          {/* Mapa */}
          <div className="col-lg-7">
            <iframe
              title="Ubicación Justicia Lex"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d205.31694487004685!2d-58.53902009363068!3d-34.5770670115596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb76fb1d4047f%3A0xaa58d4c0422a6316!2sAbogados%20de%20Buenos%20Aires%20-%20Justicia%20Lex%20%E2%9A%96%EF%B8%8F!5e0!3m2!1ses!2sar!4v1750682301420!5m2!1ses!2sar"
              width="100%"
              height={500}
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Formulario */}
          <div
            className="col-lg-5"
            style={{
              padding: '2rem',
            }}
          >
            <form>
              <div className="mb-4">
                <label htmlFor="nombre" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="form-label">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="tu@email.com"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="mensaje" className="form-label">
                  Mensaje
                </label>
                <textarea
                  className="form-control"
                  id="mensaje"
                  rows={6}
                  placeholder="Escriba su consulta"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary px-4 py-2 w-100">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacto
