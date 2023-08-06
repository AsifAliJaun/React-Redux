const reducer = (state = 0, action) => {
  if (action.type === "deposit") {
    return state + action.payload;
  }
  if (action.type === "withdrawl") {
    return state - action.payload;
  } else {
    return state;
  }
};
export default reducer;
