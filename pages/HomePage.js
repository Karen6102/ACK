function HomePage() {
  try {
    return (
      React.createElement('div', {
        className: 'fade-in',
        'data-name': 'HomePage',
        'data-file': 'pages/HomePage.js'
      }, [
        React.createElement('div', {
          key: 'hero-section',
          className: 'hero-section'
        }, [
          React.createElement('div', {
            key: 'hero-container',
            className: 'container'
          }, [
            React.createElement('h1', {
              key: 'hero-title',
              className: 'display-4 fw-bold mb-4'
            }, 'Bienvenido a tu LMS'),
            React.createElement('p', {
              key: 'hero-subtitle',
              className: 'lead mb-4'
            }, 'Descubre cursos de matemáticas, base de datos, administración y actividades extracurriculares'),
            React.createElement('button', {
              key: 'cta-button',
              className: 'btn btn-accent btn-lg'
            }, 'Explorar Cursos')
          ])
        ]),
        React.createElement('div', {
          key: 'features-section',
          className: 'container my-5'
        }, [
          React.createElement('div', {
            key: 'features-row',
            className: 'row'
          }, [
            React.createElement('div', {
              key: 'feature-1',
              className: 'col-md-4 text-center mb-4'
            }, [
              React.createElement('i', {
                key: 'feature-icon-1',
                className: 'fas fa-graduation-cap fa-3x mb-3',
                style: { color: 'var(--primary-color)' }
              }),
              React.createElement('h4', {
                key: 'feature-title-1',
                style: { color: 'var(--primary-color)' }
              }, 'Cursos Especializados'),
              React.createElement('p', {
                key: 'feature-desc-1'
              }, 'Matemáticas, Base de Datos y Administración')
            ]),
            React.createElement('div', {
              key: 'feature-2',
              className: 'col-md-4 text-center mb-4'
            }, [
              React.createElement('i', {
                key: 'feature-icon-2',
                className: 'fas fa-swimming-pool fa-3x mb-3',
                style: { color: 'var(--primary-color)' }
              }),
              React.createElement('h4', {
                key: 'feature-title-2',
                style: { color: 'var(--primary-color)' }
              }, 'Actividades Extracurriculares'),
              React.createElement('p', {
                key: 'feature-desc-2'
              }, 'Natación y Cocina Oriental')
            ]),
            React.createElement('div', {
              key: 'feature-3',
              className: 'col-md-4 text-center mb-4'
            }, [
              React.createElement('i', {
                key: 'feature-icon-3',
                className: 'fas fa-calendar-check fa-3x mb-3',
                style: { color: 'var(--primary-color)' }
              }),
              React.createElement('h4', {
                key: 'feature-title-3',
                style: { color: 'var(--primary-color)' }
              }, 'Reservas y Compras'),
              React.createElement('p', {
                key: 'feature-desc-3'
              }, 'Sistema de citas y carrito de compras')
            ])
          ])
        ])
      ])
    );
  } catch (error) {
    console.error('HomePage component error:', error);
    reportError(error);
  }
}
