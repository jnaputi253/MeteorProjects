import React from 'react';
import PropTypes from 'prop-types';

const TitleBar = ({title, subtitle}) => {
  if(subtitle) {
    return (
      <div className='title-bar'>
        <div className='wrapper'>
          <h1>{title}</h1>
          <h2 className='title-bar__subtitle'>{subtitle}</h2>
        </div>
      </div>
    );
  } else {
    return (
      <div className='title-bar'>
        <div className='wrapper'>
          <h1>{title}</h1>
        </div>
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
