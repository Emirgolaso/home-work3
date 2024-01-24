export const updateNumber = (isIncrement) => {
  const randomNumber = Math.floor(Math.random() * 50); 
  const delta = isIncrement ? randomNumber : -randomNumber;

  return {
    type: 'UPDATE_NUMBER',
    payload: delta,
  };
};
