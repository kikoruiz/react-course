import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { translations } from '../data';
import { languages } from '../config';

export default class Title extends Component {
  static get propTypes () {
    return {
      user: PropTypes.string,
      language: PropTypes.oneOf(languages),
      highlightTitle: PropTypes.bool
    };
  }

  title () {
    const { user, language } = this.props;

    return translations[language]['TITLE'].replace(
      '%user%',
      user
    );
  }

  render () {
    const { highlightTitle } = this.props;
    const className = classNames('title', {
      'title--highlighted': highlightTitle
    });

    return (<h1 className={className}>{this.title()}</h1>);
  }
}
