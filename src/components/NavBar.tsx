import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Ejecutar en carga inicial

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'navbar-scrolled' : 'navbar-top'}`}
        >
            <div className="container">
                <a className="navbar-brand fw-bold" href="#">
                    Justicia Lex
                </a>
                <button
                    className={`navbar-toggler ${!scrolled ? 'navbar-toggler-white' : ''}`}
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar"
                    aria-controls="offcanvasNavbar"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className={`offcanvas offcanvas-end offcanvas-white`}
                    tabIndex={-1}
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                >
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Justicia Lex</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            {['Inicio', 'Especialidades', 'Reseñas', 'Contacto'].map((item, i) => (
                                <li key={i} className="nav-item">
                                    <a
                                        className="nav-link"
                                        href={item === 'Inicio' ? '#' : `#${item.toLowerCase()}`}
                                        data-bs-dismiss="offcanvas"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
