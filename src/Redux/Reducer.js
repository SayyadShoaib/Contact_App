const Initial_State = {
  Auth: false,
  dark: false,
};
function Reducer(state = Initial_State, action) {
  if (action.type === "theme") {
    return (state = { Auth: true, dark: action.payload });
  } else if (action.type === "AUTH_CHECK") {
    return (state = { ...Initial_State, Auth: action.payload });
  }
  return Initial_State;
}

export default Reducer;
