function App() {
  try {
    const [activeTab, setActiveTab] = React.useState('home');
    const [user, setUser] = React.useState(null);

    React.useEffect(() => {
      const currentUser = DataManager.getCurrentUser();
      setUser(currentUser);
    }, []);

    const handleTabChange = (tab) => {
      setActiveTab(tab);
    };

    const handleShowDashboard = () => {
      setActiveTab('dashboard');
    };

    const renderContent = () => {
      switch (activeTab) {
        case 'home':
          return React.createElement(HomePage);
        case 'courses':
          return React.createElement(CourseCatalog);
        case 'blog':
          return React.createElement(BlogPage);
        case 'contact':
          return React.createElement(ContactPage);
        case 'dashboard':
          return React.createElement(Dashboard);
        default:
          return React.createElement(HomePage);
      }
    };

    if (!user) {
      return React.createElement('div', {
        className: 'container mt-5 text-center'
      }, [
        React.createElement('div', {
          key: 'loading',
          className: 'spinner-border text-primary'
        }),
        React.createElement('p', {
          key: 'loading-text',
          className: 'mt-2'
        }, 'Cargando...')
      ]);
    }

    return (
      React.createElement('div', {
        className: 'app',
        'data-name': 'App',
        'data-file': 'app.js'
      }, [
        React.createElement('main', {
          key: 'main-content',
          className: 'main-content'
        }, renderContent()),
        React.createElement(UserProfile, {
          key: 'user-profile',
          user: user,
          onShowDashboard: handleShowDashboard
        }),
        React.createElement(Navigation, {
          key: 'navigation',
          activeTab: activeTab,
          onTabChange: handleTabChange
        })
      ])
    );
  } catch (error) {
    console.error('App component error:', error);
    reportError(error);
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
