function ThemeChange(data, dispatch) {
  dispatch({ type: "theme", payload: data });
}

function ChangeAuth(data, dispatch) {
  dispatch({ type: "AUTH_CHECK", payload: data });
}

export { ChangeAuth, ThemeChange };
