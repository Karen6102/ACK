function BlogPage() {
  try {
    const [posts, setPosts] = React.useState([]);

    React.useEffect(() => {
      loadBlogPosts();
    }, []);

    const loadBlogPosts = async () => {
      const blogData = [
        {
          id: 1,
          title: '5 Técnicas para Mejorar en Matemáticas',
          excerpt: 'Descubre métodos efectivos para dominar conceptos matemáticos complejos.',
          image: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=400&h=200&fit=crop',
          date: '15 Nov 2024',
          author: 'Prof. María García'
        },
        {
          id: 2,
          title: 'Fundamentos de Bases de Datos Relacionales',
          excerpt: 'Una guía completa para entender el diseño de bases de datos.',
          image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=200&fit=crop',
          date: '12 Nov 2024',
          author: 'Dr. Carlos López'
        },
        {
          id: 3,
          title: 'Liderazgo en la Era Digital',
          excerpt: 'Cómo adaptar tu estilo de liderazgo a los nuevos tiempos.',
          image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=200&fit=crop',
          date: '10 Nov 2024',
          author: 'Lic. Ana Martínez'
        },
        {
          id: 4,
          title: 'Beneficios de la Natación para la Salud',
          excerpt: 'Conoce todos los beneficios físicos y mentales de la natación.',
          image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=200&fit=crop',
          date: '8 Nov 2024',
          author: 'Entrenador Luis Rodríguez'
        }
      ];
      setPosts(blogData);
    };

    return (
      React.createElement('div', {
        className: 'container my-4 fade-in',
        'data-name': 'BlogPage',
        'data-file': 'pages/BlogPage.js'
      }, [
        React.createElement('h2', {
          key: 'blog-title',
          className: 'section-header text-center'
        }, 'Blog Educativo'),
        React.createElement('div', {
          key: 'posts-grid',
          className: 'row'
        }, 
          posts.map(post => 
            React.createElement(BlogPost, {
              key: post.id,
              post: post
            })
          )
        )
      ])
    );
  } catch (error) {
    console.error('BlogPage component error:', error);
    reportError(error);
  }
}
