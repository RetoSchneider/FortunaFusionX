export const CHANGE_PASSWORD_REQUEST = "CHANGE_PASSWORD_REQUEST";
export const CHANGE_PASSWORD_SUCCESS = "CHANGE_PASSWORD_SUCCESS";
export const CHANGE_PASSWORD_FAILURE = "CHANGE_PASSWORD_FAILURE";

export const changePasswordRequest = () => ({
  type: CHANGE_PASSWORD_REQUEST,
});

export const changePasswordSuccess = () => ({
  type: CHANGE_PASSWORD_SUCCESS,
});

export const changePasswordFailure = (error) => ({
  type: CHANGE_PASSWORD_FAILURE,
  payload: error,
});

export const changePassword = (passwordChange) => (dispatch) => {
  dispatch(changePasswordRequest());
  const token = localStorage.getItem("jwtToken");

  fetch("/api/myprofile/ChangePassword", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(passwordChange),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      dispatch(changePasswordSuccess());
    })
    .catch((error) => dispatch(changePasswordFailure(error.message)));
};
