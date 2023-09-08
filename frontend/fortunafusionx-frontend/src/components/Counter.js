import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions/counterActions';

const Counter = ({ count, increment, decrement }) => {
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    count: state
  };
};

export default connect(mapStateToProps, { increment, decrement })(Counter);
