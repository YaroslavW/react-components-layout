import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Icon.css';

const Icon = ({name, className, onClick, size, disabled, ...attrs}) => {

  const classes = classNames(
    'fa',
    `fa-${name}`,
    {func: onClick},
    {disabled},
    className,
  )

  const elSize = size ? {fontSize: `${size}rem`} : null;

  return (
    <i
      {...attrs}
      className={classes}
      onClick ={disabled ? null : onClick}
      style={elSize}
    />
      
   
  );
};

Icon.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.number,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
}

Icon.defaultProps = {
  name: '',
  className: '',
  size: null,
  disabled: false,
  onClick: null,
}
export default Icon;