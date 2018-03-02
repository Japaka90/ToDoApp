import React from 'react';
import PropTypes from 'prop-types';

const DeleteIcon = ({ onClick }) => {
  return <span onClick={onClick}>x</span>;
};

DeleteIcon.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default DeleteIcon;
