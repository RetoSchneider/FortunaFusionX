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
    fetch("/api/account/login", {
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
          dispatch(loginSuccess(data.token));
        }
      })
      .catch((error) => {
        dispatch(loginFailure(error.toString()));
      });
  };
};

export const registerUser = (email, username, password) => {
  return (dispatch) => {
    fetch("/api/account/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, username, password }),
   })
   .then((res) => {
      if (res.status === 200 && res.headers.get("content-length") !== "0") {
         return res.json();
      }
      return null;
   })
   .then((data) => {
      if (data && data.error) {
         dispatch(loginFailure(data.error));
      } else if (data && data.message) {
         console.log(data.message);
      } else {
         dispatch(loginSuccess());
      }
   })
   .catch((error) => {
      dispatch(loginFailure(error.toString()));
   });
   
  };
};
