function ContactPage() {
  try {
    const [formData, setFormData] = React.useState({
      name: '',
      email: '',
      message: ''
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      alert('Mensaje enviado. Te contactaremos pronto.');
      setFormData({ name: '', email: '', message: '' });
    };

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

    return (
      React.createElement('div', {
        className: 'container my-4 fade-in',
        'data-name': 'ContactPage',
        'data-file': 'pages/ContactPage.js'
      }, [
        React.createElement('h2', {
          key: 'contact-title',
          className: 'section-header text-center'
        }, 'Contacto'),
        React.createElement('div', {
          key: 'contact-content',
          className: 'row'
        }, [
          React.createElement('div', {
            key: 'contact-form',
            className: 'col-lg-8 mb-4'
          }, [
            React.createElement('div', {
              key: 'form-card',
              className: 'card'
            }, [
              React.createElement('div', {
                key: 'form-body',
                className: 'card-body'
              }, [
                React.createElement('h5', {
                  key: 'form-title',
                  className: 'card-title'
                }, 'Envíanos un mensaje'),
                React.createElement('form', {
                  key: 'contact-form-element',
                  onSubmit: handleSubmit
                }, [
                  React.createElement('div', {
                    key: 'name-field',
                    className: 'mb-3'
                  }, [
                    React.createElement('label', {
                      key: 'name-label',
                      className: 'form-label'
                    }, 'Nombre'),
                    React.createElement('input', {
                      key: 'name-input',
                      type: 'text',
                      className: 'form-control',
                      name: 'name',
                      value: formData.name,
                      onChange: handleChange,
                      required: true
                    })
                  ]),
                  React.createElement('div', {
                    key: 'email-field',
                    className: 'mb-3'
                  }, [
                    React.createElement('label', {
                      key: 'email-label',
                      className: 'form-label'
                    }, 'Email'),
                    React.createElement('input', {
                      key: 'email-input',
                      type: 'email',
                      className: 'form-control',
                      name: 'email',
                      value: formData.email,
                      onChange: handleChange,
                      required: true
                    })
                  ]),
                  React.createElement('div', {
                    key: 'message-field',
                    className: 'mb-3'
                  }, [
                    React.createElement('label', {
                      key: 'message-label',
                      className: 'form-label'
                    }, 'Mensaje'),
                    React.createElement('textarea', {
                      key: 'message-input',
                      className: 'form-control',
                      name: 'message',
                      rows: 4,
                      value: formData.message,
                      onChange: handleChange,
                      required: true
                    })
                  ]),
                  React.createElement('button', {
                    key: 'submit-btn',
                    type: 'submit',
                    className: 'btn btn-primary'
                  }, 'Enviar Mensaje')
                ])
              ])
            ])
          ]),
          React.createElement('div', {
            key: 'social-media',
            className: 'col-lg-4'
          }, [
            React.createElement('div', {
              key: 'social-card',
              className: 'card'
            }, [
              React.createElement('div', {
                key: 'social-body',
                className: 'card-body'
              }, [
                React.createElement('h5', {
                  key: 'social-title',
                  className: 'card-title'
                }, 'Síguenos en Redes Sociales'),
                React.createElement('div', {
                  key: 'social-links',
                  className: 'd-grid gap-2'
                }, [
                  React.createElement('a', {
                    key: 'whatsapp-link',
                    href: 'https://wa.me/1234567890',
                    className: 'btn btn-success',
                    target: '_blank'
                  }, [
                    React.createElement('i', { key: 'whatsapp-icon', className: 'fab fa-whatsapp me-2' }),
                    'WhatsApp'
                  ]),
                  React.createElement('a', {
                    key: 'instagram-link',
                    href: 'https://instagram.com/lmsplatform',
                    className: 'btn btn-outline-primary',
                    target: '_blank'
                  }, [
                    React.createElement('i', { key: 'instagram-icon', className: 'fab fa-instagram me-2' }),
                    'Instagram'
                  ]),
                  React.createElement('a', {
                    key: 'facebook-link',
                    href: 'https://facebook.com/lmsplatform',
                    className: 'btn btn-primary',
                    target: '_blank'
                  }, [
                    React.createElement('i', { key: 'facebook-icon', className: 'fab fa-facebook me-2' }),
                    'Facebook'
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    );
  } catch (error) {
    console.error('ContactPage component error:', error);
    reportError(error);
  }
}
