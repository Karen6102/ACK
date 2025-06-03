function BlogPost({ post }) {
  try {
    return (
      React.createElement('div', {
        className: 'col-lg-6 mb-4',
        'data-name': 'BlogPost',
        'data-file': 'components/BlogPost.js'
      }, [
        React.createElement('div', {
          key: 'post-card',
          className: 'card h-100'
        }, [
          React.createElement('img', {
            key: 'post-image',
            src: post.image,
            className: 'card-img-top',
            alt: post.title,
            style: { height: '200px', objectFit: 'cover' }
          }),
          React.createElement('div', {
            key: 'card-body',
            className: 'card-body'
          }, [
            React.createElement('h5', {
              key: 'post-title',
              className: 'card-title'
            }, post.title),
            React.createElement('p', {
              key: 'post-excerpt',
              className: 'card-text'
            }, post.excerpt),
            React.createElement('div', {
              key: 'post-meta',
              className: 'text-muted small'
            }, [
              React.createElement('i', { key: 'calendar-icon', className: 'fas fa-calendar me-1' }),
              post.date,
              React.createElement('span', { key: 'separator', className: 'mx-2' }, '•'),
              React.createElement('i', { key: 'user-icon', className: 'fas fa-user me-1' }),
              post.author
            ])
          ]),
          React.createElement('div', {
            key: 'card-footer',
            className: 'card-footer bg-transparent'
          }, [
            React.createElement('a', {
              key: 'read-more',
              href: '#',
              className: 'btn btn-outline-primary'
            }, 'Leer más')
          ])
        ])
      ])
    );
  } catch (error) {
    console.error('BlogPost component error:', error);
    reportError(error);
  }
}
