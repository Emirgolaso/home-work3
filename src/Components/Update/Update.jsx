import React from 'react';
import { connect } from 'react-redux';
import { updateNumber } from '../../store/action/Action';
import  classes from  './update.module.css'

const  Update= ({ number, updateNumber }) => {
  return (
    <div>
      <p className={classes.num}>Number: {number}</p>
      <button className={classes.btn1} onClick={() => updateNumber(true)}>+RND</button>
      <button className={classes.btn2} onClick={() => updateNumber(false)}>-RND</button>
    </div>
  );
};

const ToProps = (state) => {
  return {
    number: state.number,
  };
};

const Dispatch = {
  updateNumber,
};

export default connect(ToProps, Dispatch) (Update);
