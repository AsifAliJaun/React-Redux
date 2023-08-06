export const deposit = (amount) => {
  return (disptch) => {
    disptch({
      type: "deposit",
      payload: amount,
    });
  };
};
export const Withdrawl = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "withdrawl",
      payload: amount,
    });
  };
};
