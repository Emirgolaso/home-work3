const initialState = {
    number: 0,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_NUMBER':
        return {
          ...state,
          number: state.number + action.payload,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  