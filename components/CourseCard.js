function CourseCard({ course, onEnroll }) {
  try {
    return (
      React.createElement('div', {
        className: 'col-lg-4 col-md-6 mb-4',
        'data-name': 'CourseCard',
        'data-file': 'components/CourseCard.js'
      }, [
        React.createElement('div', {
          key: 'card',
          className: 'card course-card h-100'
        }, [
          React.createElement('img', {
            key: 'course-image',
            src: course.image,
            className: 'card-img-top',
            alt: course.title,
            style: { height: '200px', objectFit: 'cover' }
          }),
          React.createElement('div', {
            key: 'card-body',
            className: 'card-body d-flex flex-column'
          }, [
            React.createElement('h5', {
              key: 'title',
              className: 'card-title'
            }, course.title),
            React.createElement('p', {
              key: 'description',
              className: 'card-text'
            }, course.description),
            React.createElement('div', {
              key: 'course-info',
              className: 'mb-3'
            }, [
              React.createElement('small', {
                key: 'duration',
                className: 'text-muted d-block'
              }, [
                React.createElement('i', { key: 'clock-icon', className: 'fas fa-clock me-1' }),
                course.duration
              ]),
              React.createElement('small', {
                key: 'level',
                className: 'text-muted d-block'
              }, [
                React.createElement('i', { key: 'level-icon', className: 'fas fa-signal me-1' }),
                course.level
              ])
            ]),
            React.createElement('div', {
              key: 'card-footer',
              className: 'mt-auto'
            }, [
              React.createElement('div', {
                key: 'price-enroll',
                className: 'd-flex justify-content-between align-items-center'
              }, [
                React.createElement('span', {
                  key: 'price',
                  className: 'h5 mb-0 text-primary'
                }, course.price),
                React.createElement('button', {
                  key: 'enroll-btn',
                  className: 'btn btn-primary',
                  onClick: () => onEnroll(course)
                }, 'Inscribirse')
              ])
            ])
          ])
        ])
      ])
    );
  } catch (error) {
    console.error('CourseCard component error:', error);
    reportError(error);
  }
}
