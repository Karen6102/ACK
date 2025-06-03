function Dashboard() {
  try {
    const [userProgress, setUserProgress] = React.useState({});

    React.useEffect(() => {
      loadUserProgress();
    }, []);

    const loadUserProgress = () => {
      const progressData = {
        overallProgress: 65,
        enrolledCourses: [
          { id: 1, name: 'Matemáticas Avanzadas', progress: 75, totalLessons: 24, completedLessons: 18 },
          { id: 4, name: 'Natación Técnica', progress: 55, totalLessons: 12, completedLessons: 7 }
        ],
        certificates: 2,
        totalHours: 45,
        achievements: [
          { name: 'Primera Lección', icon: 'fas fa-star', earned: true },
          { name: 'Semana Completa', icon: 'fas fa-calendar-week', earned: true },
          { name: 'Matemático', icon: 'fas fa-calculator', earned: false }
        ]
      };
      setUserProgress(progressData);
    };

    return (
      React.createElement('div', {
        className: 'container my-4 fade-in',
        'data-name': 'Dashboard',
        'data-file': 'pages/Dashboard.js'
      }, [
        React.createElement('h2', {
          key: 'dashboard-title',
          className: 'section-header text-center'
        }, 'Mi Dashboard'),
        React.createElement('div', {
          key: 'stats-row',
          className: 'row mb-4'
        }, [
          React.createElement('div', {
            key: 'overall-progress',
            className: 'col-md-3 mb-3'
          }, [
            React.createElement('div', {
              key: 'progress-card',
              className: 'card text-center'
            }, [
              React.createElement('div', {
                key: 'card-body',
                className: 'card-body'
              }, [
                React.createElement('i', {
                  key: 'progress-icon',
                  className: 'fas fa-chart-line fa-2x text-primary mb-2'
                }),
                React.createElement('h5', {
                  key: 'progress-value',
                  className: 'card-title'
                }, `${userProgress.overallProgress || 0}%`),
                React.createElement('p', {
                  key: 'progress-label',
                  className: 'card-text'
                }, 'Progreso General')
              ])
            ])
          ]),
          React.createElement('div', {
            key: 'certificates',
            className: 'col-md-3 mb-3'
          }, [
            React.createElement('div', {
              key: 'cert-card',
              className: 'card text-center'
            }, [
              React.createElement('div', {
                key: 'cert-body',
                className: 'card-body'
              }, [
                React.createElement('i', {
                  key: 'cert-icon',
                  className: 'fas fa-certificate fa-2x text-primary mb-2'
                }),
                React.createElement('h5', {
                  key: 'cert-value',
                  className: 'card-title'
                }, userProgress.certificates || 0),
                React.createElement('p', {
                  key: 'cert-label',
                  className: 'card-text'
                }, 'Certificados')
              ])
            ])
          ]),
          React.createElement('div', {
            key: 'hours',
            className: 'col-md-3 mb-3'
          }, [
            React.createElement('div', {
              key: 'hours-card',
              className: 'card text-center'
            }, [
              React.createElement('div', {
                key: 'hours-body',
                className: 'card-body'
              }, [
                React.createElement('i', {
                  key: 'hours-icon',
                  className: 'fas fa-clock fa-2x text-primary mb-2'
                }),
                React.createElement('h5', {
                  key: 'hours-value',
                  className: 'card-title'
                }, `${userProgress.totalHours || 0}h`),
                React.createElement('p', {
                  key: 'hours-label',
                  className: 'card-text'
                }, 'Horas Estudiadas')
              ])
            ])
          ]),
          React.createElement('div', {
            key: 'courses',
            className: 'col-md-3 mb-3'
          }, [
            React.createElement('div', {
              key: 'courses-card',
              className: 'card text-center'
            }, [
              React.createElement('div', {
                key: 'courses-body',
                className: 'card-body'
              }, [
                React.createElement('i', {
                  key: 'courses-icon',
                  className: 'fas fa-book fa-2x text-primary mb-2'
                }),
                React.createElement('h5', {
                  key: 'courses-value',
                  className: 'card-title'
                }, (userProgress.enrolledCourses || []).length),
                React.createElement('p', {
                  key: 'courses-label',
                  className: 'card-text'
                }, 'Cursos Activos')
              ])
            ])
          ])
        ]),
        React.createElement('div', {
          key: 'courses-progress',
          className: 'row'
        }, [
          React.createElement('div', {
            key: 'courses-col',
            className: 'col-lg-8 mb-4'
          }, [
            React.createElement('div', {
              key: 'courses-card',
              className: 'card'
            }, [
              React.createElement('div', {
                key: 'courses-header',
                className: 'card-header'
              }, [
                React.createElement('h5', {
                  key: 'courses-title',
                  className: 'mb-0'
                }, 'Progreso por Curso')
              ]),
              React.createElement('div', {
                key: 'courses-body',
                className: 'card-body'
              },
                (userProgress.enrolledCourses || []).map(course =>
                  React.createElement('div', {
                    key: course.id,
                    className: 'mb-3'
                  }, [
                    React.createElement('div', {
                      key: 'course-info',
                      className: 'd-flex justify-content-between mb-1'
                    }, [
                      React.createElement('span', {
                        key: 'course-name'
                      }, course.name),
                      React.createElement('span', {
                        key: 'course-progress'
                      }, `${course.progress}%`)
                    ]),
                    React.createElement('div', {
                      key: 'course-progress-bar',
                      className: 'progress'
                    }, [
                      React.createElement('div', {
                        key: 'course-progress-fill',
                        className: 'progress-bar',
                        style: { 
                          width: `${course.progress}%`,
                          backgroundColor: 'var(--primary-color)'
                        }
                      })
                    ]),
                    React.createElement('small', {
                      key: 'course-lessons',
                      className: 'text-muted'
                    }, `${course.completedLessons}/${course.totalLessons} lecciones completadas`)
                  ])
                )
              )
            ])
          ]),
          React.createElement('div', {
            key: 'achievements-col',
            className: 'col-lg-4 mb-4'
          }, [
            React.createElement('div', {
              key: 'achievements-card',
              className: 'card'
            }, [
              React.createElement('div', {
                key: 'achievements-header',
                className: 'card-header'
              }, [
                React.createElement('h5', {
                  key: 'achievements-title',
                  className: 'mb-0'
                }, 'Logros')
              ]),
              React.createElement('div', {
                key: 'achievements-body',
                className: 'card-body'
              },
                (userProgress.achievements || []).map((achievement, index) =>
                  React.createElement('div', {
                    key: index,
                    className: `d-flex align-items-center mb-2 ${achievement.earned ? '' : 'text-muted'}`
                  }, [
                    React.createElement('i', {
                      key: 'achievement-icon',
                      className: `${achievement.icon} me-2 ${achievement.earned ? 'text-warning' : ''}`
                    }),
                    React.createElement('span', {
                      key: 'achievement-name'
                    }, achievement.name)
                  ])
                )
              )
            ])
          ])
        ])
      ])
    );
  } catch (error) {
    console.error('Dashboard component error:', error);
    reportError(error);
  }
}
