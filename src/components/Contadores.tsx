import React, { useEffect, useRef, useState } from 'react';

interface Dato {
  label: string;
  value: number;
}

const datos: Dato[] = [
  { label: 'Clientes satisfechos', value: 1000 },
  { label: 'Empresas aliadas', value: 20 },
];

const Contadores: React.FC = () => {
  const [valores, setValores] = useState(datos.map(() => 0));
  const [animado, setAnimado] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || animado) return;
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animado) {
          setAnimado(true);
          observer.disconnect(); // ⬅️ Importante: detener la observación después de activar
  
          datos.forEach((dato, i) => {
            let start = 0;
            const incremento = Math.ceil(dato.value / 40);
            const intervalo = setInterval(() => {
              start += incremento;
              if (start >= dato.value) {
                start = dato.value;
                clearInterval(intervalo);
              }
              setValores((prev) => {
                const actualizados = [...prev];
                actualizados[i] = start;
                return actualizados;
              });
            }, 40);
          });
        }
      },
      { threshold: 0.5 }
    );
  
    observer.observe(ref.current);
  
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [animado]);
  

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: '#1c1c1c',
        padding: '4rem 1rem',
        textAlign: 'center',
        color: 'white',
      }}
    >
      <h2 style={{ fontSize: '2rem', marginBottom: '3rem' }}>
        Más de <span style={{ color: '#ffc107' }}>mil personas</span> y empresas ya confiaron
      </h2>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '2rem'
      }}>
        {datos.map((dato, i) => (
          <div key={i} style={{
            backgroundColor: '#2a2a2a',
            padding: '2rem',
            borderRadius: '1rem',
            minWidth: '200px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.4)'
          }}>
            <p style={{ fontSize: '3rem', margin: 0, color: '#ffc107' }}>+{valores[i]}</p>
            <p style={{ margin: '0.5rem 0 0', fontSize: '1.1rem' }}>{dato.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contadores;
