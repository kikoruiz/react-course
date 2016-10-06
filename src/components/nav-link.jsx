import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

export default function NavLink ({ params, path, text }, context) {
  const navLinkClassName = linkPath => {
    return classNames('nav-link', {
      'nav-link--active': linkPath === context.path
    });
  };

  return (
    <Link to={`/${context.language}/${path}`} className={navLinkClassName(path)}>
      {text}
    </Link>
  );
}

NavLink.propTypes = {
  params: PropTypes.object,
  path: PropTypes.string,
  text: PropTypes.string
};

NavLink.contextTypes = {
  language: PropTypes.string,
  path: PropTypes.string
};
