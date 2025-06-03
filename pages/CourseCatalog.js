function CourseCatalog() {
  try {
    const [selectedCategory, setSelectedCategory] = React.useState('all');
    const [courses, setCourses] = React.useState([]);

    React.useEffect(() => {
      loadCourses();
    }, []);

    const loadCourses = async () => {
      const courseData = [
        {
          id: 1,
          title: 'Matemáticas Avanzadas',
          description: 'Curso completo de matemáticas con niveles progresivos',
          category: 'mathematics',
          image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=200&fit=crop',
          price: '$99',
          duration: '12 semanas',
          level: 'Intermedio'
        },
        {
          id: 2,
          title: 'Base de Datos Fundamentals',
          description: 'Aprende diseño y gestión de bases de datos',
          category: 'database',
          image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=200&fit=crop',
          price: '$129',
          duration: '10 semanas',
          level: 'Principiante'
        },
        {
          id: 3,
          title: 'Administración Empresarial',
          description: 'Técnicas modernas de administración',
          category: 'administration',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop',
          price: '$149',
          duration: '8 semanas',
          level: 'Avanzado'
        },
        {
          id: 4,
          title: 'Natación Técnica',
          description: 'Mejora tu técnica de natación',
          category: 'swimming',
          image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=400&h=200&fit=crop',
          price: '$79',
          duration: '6 semanas',
          level: 'Todos los niveles'
        },
        {
          id: 5,
          title: 'Cocina Oriental',
          description: 'Recetas tradicionales de cocina asiática',
          category: 'cooking',
          image: 'https://images.unsplash.com/photo-1496412705862-e0fed03f3e02?w=400&h=200&fit=crop',
          price: '$89',
          duration: '4 semanas',
          level: 'Principiante'
        }
      ];
      setCourses(courseData);
    };

    const filteredCourses = selectedCategory === 'all' 
      ? courses 
      : courses.filter(course => course.category === selectedCategory);

    const handleEnroll = (course) => {
      alert(`Inscrito en: ${course.title}`);
    };

    return (
      React.createElement('div', {
        className: 'container my-4 fade-in',
        'data-name': 'CourseCatalog',
        'data-file': 'pages/CourseCatalog.js'
      }, [
        React.createElement('h2', {
          key: 'catalog-title',
          className: 'section-header text-center'
        }, 'Catálogo de Cursos'),
        React.createElement('div', {
          key: 'filter-section',
          className: 'row mb-4'
        }, [
          React.createElement('div', {
            key: 'filter-buttons',
            className: 'col-12 text-center'
          }, [
            React.createElement('button', {
              key: 'all-btn',
              className: `btn ${selectedCategory === 'all' ? 'btn-primary' : 'btn-outline-primary'} me-2 mb-2`,
              onClick: () => setSelectedCategory('all')
            }, 'Todos'),
            React.createElement('button', {
              key: 'math-btn',
              className: `btn ${selectedCategory === 'mathematics' ? 'btn-primary' : 'btn-outline-primary'} me-2 mb-2`,
              onClick: () => setSelectedCategory('mathematics')
            }, 'Matemáticas'),
            React.createElement('button', {
              key: 'db-btn',
              className: `btn ${selectedCategory === 'database' ? 'btn-primary' : 'btn-outline-primary'} me-2 mb-2`,
              onClick: () => setSelectedCategory('database')
            }, 'Base de Datos'),
            React.createElement('button', {
              key: 'admin-btn',
              className: `btn ${selectedCategory === 'administration' ? 'btn-primary' : 'btn-outline-primary'} me-2 mb-2`,
              onClick: () => setSelectedCategory('administration')
            }, 'Administración'),
            React.createElement('button', {
              key: 'swim-btn',
              className: `btn ${selectedCategory === 'swimming' ? 'btn-primary' : 'btn-outline-primary'} me-2 mb-2`,
              onClick: () => setSelectedCategory('swimming')
            }, 'Natación'),
            React.createElement('button', {
              key: 'cook-btn',
              className: `btn ${selectedCategory === 'cooking' ? 'btn-primary' : 'btn-outline-primary'} me-2 mb-2`,
              onClick: () => setSelectedCategory('cooking')
            }, 'Cocina')
          ])
        ]),
        React.createElement('div', {
          key: 'courses-grid',
          className: 'row'
        }, 
          filteredCourses.map(course => 
            React.createElement(CourseCard, {
              key: course.id,
              course: course,
              onEnroll: handleEnroll
            })
          )
        )
      ])
    );
  } catch (error) {
    console.error('CourseCatalog component error:', error);
    reportError(error);
  }
}
