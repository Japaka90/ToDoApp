import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo } from '../actions/actions';

const AddTodo = ({ dispatch }) => {
  let input;

  const handleClick = () => () => {
    if (!input.value.trim()) {
      return;
    }
    dispatch(addTodo(input.value));
    input.value = '';
  };

  return (
    <div>
      <input
        ref={node => {
          input = node;
        }}
      />
      <button onClick={handleClick}>Add Todo</button>
    </div>
  );
};

AddTodo.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const AddTodoContainer = connect()(AddTodo);

export default AddTodoContainer;
