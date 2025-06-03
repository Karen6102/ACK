function UserProfile({ user, onShowDashboard }) {
  try {
    const [showDropdown, setShowDropdown] = React.useState(false);
    const overallProgress = 65; // Example progress percentage

    return (
      React.createElement('div', {
        className: 'user-profile',
        'data-name': 'UserProfile',
        'data-file': 'components/UserProfile.js'
      }, [
        React.createElement('div', {
          key: 'profile-trigger',
          className: 'dropdown',
          onClick: () => setShowDropdown(!showDropdown)
        }, [
          React.createElement('div', {
            key: 'user-icon-container',
            className: 'position-relative',
            style: { cursor: 'pointer' }
          }, [
            React.createElement('div', {
              key: 'user-icon',
              className: 'd-flex align-items-center justify-content-center',
              style: { 
                width: '40px', 
                height: '40px', 
                borderRadius: '50%',
                backgroundColor: 'var(--primary-color)',
                color: 'white'
              }
            }, [
              React.createElement('i', {
                key: 'icon',
                className: 'fas fa-user'
              })
            ]),
            React.createElement('div', {
              key: 'progress-ring',
              className: 'position-absolute',
              style: {
                top: '-3px',
                left: '-3px',
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                background: `conic-gradient(var(--primary-color) ${overallProgress * 3.6}deg, #e0e0e0 0deg)`,
                padding: '2px'
              }
            }, [
              React.createElement('div', {
                key: 'inner-ring',
                style: {
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  backgroundColor: 'white'
                }
              })
            ])
          ]),
          showDropdown && React.createElement('div', {
            key: 'dropdown-menu',
            className: 'dropdown-menu show position-absolute',
            style: { right: 0, top: '50px', minWidth: '200px' }
          }, [
            React.createElement('h6', {
              key: 'username',
              className: 'dropdown-header'
            }, user.name),
            React.createElement('div', {
              key: 'progress-info',
              className: 'px-3 py-2'
            }, [
              React.createElement('small', {
                key: 'progress-text',
                className: 'text-muted'
              }, `Progreso: ${overallProgress}%`),
              React.createElement('div', {
                key: 'progress-bar',
                className: 'progress mt-1',
                style: { height: '6px' }
              }, [
                React.createElement('div', {
                  key: 'progress-fill',
                  className: 'progress-bar',
                  style: { 
                    width: `${overallProgress}%`,
                    backgroundColor: 'var(--primary-color)'
                  }
                })
              ])
            ]),
            React.createElement('div', { key: 'divider-1', className: 'dropdown-divider' }),
            React.createElement('a', {
              key: 'dashboard-link',
              className: 'dropdown-item',
              href: '#',
              onClick: (e) => {
                e.preventDefault();
                onShowDashboard();
                setShowDropdown(false);
              }
            }, [
              React.createElement('i', { key: 'dashboard-icon', className: 'fas fa-chart-line me-2' }),
              'Mi Dashboard'
            ]),
            React.createElement('a', {
              key: 'profile-link',
              className: 'dropdown-item',
              href: '#'
            }, [
              React.createElement('i', { key: 'profile-icon', className: 'fas fa-user me-2' }),
              'Mi Perfil'
            ]),
            React.createElement('a', {
              key: 'settings-link',
              className: 'dropdown-item',
              href: '#'
            }, [
              React.createElement('i', { key: 'settings-icon', className: 'fas fa-cog me-2' }),
              'Configuración'
            ]),
            React.createElement('div', { key: 'divider-2', className: 'dropdown-divider' }),
            React.createElement('a', {
              key: 'logout-link',
              className: 'dropdown-item',
              href: '#'
            }, [
              React.createElement('i', { key: 'logout-icon', className: 'fas fa-sign-out-alt me-2' }),
              'Cerrar Sesión'
            ])
          ])
        ])
      ])
    );
  } catch (error) {
    console.error('UserProfile component error:', error);
    reportError(error);
  }
}
