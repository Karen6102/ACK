const DataManager = {
  
  getCurrentUser: () => {
    return {
      id: 1,
      name: 'Juan Pérez',
      email: 'juan@example.com',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
      enrolledCourses: [1, 4]
    };
  },

  getCourses: () => {
    return [
      {
        id: 1,
        title: 'Matemáticas Avanzadas',
        description: 'Curso completo de matemáticas con niveles progresivos',
        category: 'mathematics',
        image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=200&fit=crop',
        price: '$99',
        duration: '12 semanas',
        level: 'Intermedio',
        sections: ['Álgebra', 'Cálculo', 'Geometría', 'Estadística']
      },
      {
        id: 2,
        title: 'Base de Datos Fundamentals',
        description: 'Aprende diseño y gestión de bases de datos',
        category: 'database',
        image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=200&fit=crop',
        price: '$129',
        duration: '10 semanas',
        level: 'Principiante',
        sections: ['SQL Básico', 'Diseño de BD', 'Normalización', 'Consultas Avanzadas']
      },
      {
        id: 3,
        title: 'Administración Empresarial',
        description: 'Técnicas modernas de administración',
        category: 'administration',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop',
        price: '$149',
        duration: '8 semanas',
        level: 'Avanzado',
        sections: ['Liderazgo', 'Planificación', 'Control', 'Recursos Humanos']
      },
      {
        id: 4,
        title: 'Natación Técnica',
        description: 'Mejora tu técnica de natación',
        category: 'swimming',
        image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=400&h=200&fit=crop',
        price: '$79',
        duration: '6 semanas',
        level: 'Todos los niveles',
        schedules: ['Lunes 6:00 AM', 'Miércoles 6:00 AM', 'Viernes 6:00 AM']
      },
      {
        id: 5,
        title: 'Cocina Oriental',
        description: 'Recetas tradicionales de cocina asiática',
        category: 'cooking',
        image: 'https://images.unsplash.com/photo-1496412705862-e0fed03f3e02?w=400&h=200&fit=crop',
        price: '$89',
        duration: '4 semanas',
        level: 'Principiante',
        schedules: ['Sábados 10:00 AM', 'Domingos 2:00 PM']
      }
    ];
  },

  getUniformCatalog: () => {
    return {
      men: [
        { id: 1, name: 'Traje de Baño Hombre', price: '$25', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop' },
        { id: 2, name: 'Gorro de Natación', price: '$15', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop' }
      ],
      women: [
        { id: 3, name: 'Traje de Baño Mujer', price: '$30', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop' },
        { id: 4, name: 'Gorro de Natación Rosa', price: '$15', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop' }
      ]
    };
  },

  getRecipes: () => {
    return [
      { id: 1, name: 'Sushi Roll California', difficulty: 'Intermedio', time: '45 min' },
      { id: 2, name: 'Pad Thai', difficulty: 'Fácil', time: '30 min' },
      { id: 3, name: 'Ramen Tradicional', difficulty: 'Avanzado', time: '2 horas' },
      { id: 4, name: 'Tempura de Verduras', difficulty: 'Intermedio', time: '25 min' }
    ];
  },

  saveToCart: (item) => {
    const cart = JSON.parse(localStorage.getItem('lms_cart') || '[]');
    cart.push(item);
    localStorage.setItem('lms_cart', JSON.stringify(cart));
  },

  getCart: () => {
    return JSON.parse(localStorage.getItem('lms_cart') || '[]');
  },

  clearCart: () => {
    localStorage.removeItem('lms_cart');
  }
};
