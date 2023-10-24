export const UPDATE_USER_DETAILS_REQUEST = "UPDATE_USER_DETAILS_REQUEST";
export const UPDATE_USER_DETAILS_SUCCESS = "UPDATE_USER_DETAILS_SUCCESS";
export const UPDATE_USER_DETAILS_FAILURE = "UPDATE_USER_DETAILS_FAILURE";

export const updateUserDetailsRequest = () => ({
  type: UPDATE_USER_DETAILS_REQUEST,
});

export const updateUserDetailsSuccess = () => ({
  type: UPDATE_USER_DETAILS_SUCCESS,
});

export const updateUserDetailsFailure = (error) => ({
  type: UPDATE_USER_DETAILS_FAILURE,
  payload: error,
});

export const updateUserDetails = (updatedUser) => (dispatch) => {
  dispatch(updateUserDetailsRequest());
  const token = localStorage.getItem("jwtToken");

  fetch("/api/myprofile", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(updatedUser),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      dispatch(updateUserDetailsSuccess());
    })
    .catch((error) => dispatch(updateUserDetailsFailure(error.message)));
};
