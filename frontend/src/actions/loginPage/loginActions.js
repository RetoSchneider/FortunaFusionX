export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const loginSuccess = (token) => ({
  type: LOGIN_SUCCESS,
  payload: token,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const loginUser = (username, password) => {
  return (dispatch) => {
    fetch("/api/login/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          dispatch(loginFailure(data.error));
        } else {
          localStorage.setItem("jwtToken", data.token);
          dispatch(loginSuccess(data.token));
        }
      })
      .catch((error) => {
        dispatch(loginFailure(error.toString()));
      });
  };
};
