import React from 'react';
import PropTypes from 'prop-types';

const TitleBar = ({title, subtitle}) => {
  if(subtitle) {
    return (
      <div>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
    );
  } else {
    return (
      <div>
        <h1>{title}</h1>
      </div>
    );
  }
}

TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

TitleBar.defaultProps = {
  title: 'Testing!'
};

export default TitleBar;
