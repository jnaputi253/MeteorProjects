import React from 'react';
import PropTypes from 'prop-types';

const TitleBar = ({title, subtitle}) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
}

TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

TitleBar.defaultProps = {
  title: 'Testing!',
  subtitle: 'Temporary Title'
};

export default TitleBar;
