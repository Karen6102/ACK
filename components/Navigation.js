function Navigation({ activeTab, onTabChange }) {
  try {
    const navItems = [
      { id: 'home', icon: 'fas fa-home', label: 'Inicio' },
      { id: 'courses', icon: 'fas fa-book', label: 'Cursos' },
      { id: 'blog', icon: 'fas fa-blog', label: 'Blog' },
      { id: 'contact', icon: 'fas fa-envelope', label: 'Contacto' }
    ];

    return (
      React.createElement('nav', {
        className: 'navbar-bottom',
        'data-name': 'Navigation',
        'data-file': 'components/Navigation.js'
      }, [
        React.createElement('div', {
          key: 'nav-container',
          className: 'container'
        }, [
          React.createElement('div', {
            key: 'nav-row',
            className: 'row'
          }, 
            navItems.map(item => 
              React.createElement('div', {
                key: item.id,
                className: 'col-3'
              }, [
                React.createElement('a', {
                  key: `nav-${item.id}`,
                  href: '#',
                  className: `nav-item d-block ${activeTab === item.id ? 'active' : ''}`,
                  onClick: (e) => {
                    e.preventDefault();
                    onTabChange(item.id);
                  }
                }, [
                  React.createElement('i', {
                    key: `icon-${item.id}`,
                    className: `${item.icon} d-block mb-1`
                  }),
                  React.createElement('small', {
                    key: `label-${item.id}`
                  }, item.label)
                ])
              ])
            )
          )
        ])
      ])
    );
  } catch (error) {
    console.error('Navigation component error:', error);
    reportError(error);
  }
}
