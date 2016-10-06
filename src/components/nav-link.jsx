import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

export default function NavLink ({ params, routes, path, text }) {
  const { language } = params;
  const navLinkClassName = linkPath => {
    const currentPath = routes[routes.length - 1].path || '';
    return classNames('nav-link', {
      'nav-link--active': linkPath === currentPath
    });
  };

  return (
    <Link to={`/${language}/${path}`} className={navLinkClassName(path)}>
      {text}
    </Link>
  );
}

NavLink.propTypes = {
  params: PropTypes.object,
  routes: PropTypes.array,
  path: PropTypes.string,
  text: PropTypes.string
};
