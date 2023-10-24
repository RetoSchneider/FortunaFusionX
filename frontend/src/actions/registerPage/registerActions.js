export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const registerSuccess = () => ({
  type: REGISTER_SUCCESS,
});

export const registerFailure = (error) => ({
  type: REGISTER_FAILURE,
  payload: error,
});

export const registerUser = (email, username, password) => {
  return (dispatch) => {
    fetch("/api/register", {
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
          dispatch(registerFailure(data.error));
        } else if (data && data.message) {
          console.log(data.message);
          dispatch(registerSuccess());
        } else {
          dispatch(registerSuccess());
        }
      })
      .catch((error) => {
        dispatch(registerFailure(error.toString()));
      });
  };
};
