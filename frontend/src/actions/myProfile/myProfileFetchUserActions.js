export const FETCH_PROFILE_START = "FETCH_PROFILE_START";
export const FETCH_PROFILE_SUCCESS = "FETCH_PROFILE_SUCCESS";
export const FETCH_PROFILE_FAIL = "FETCH_PROFILE_FAIL";

export const fetchProfileStart = () => ({
  type: FETCH_PROFILE_START,
});

export const fetchProfileSuccess = (data) => ({
  type: FETCH_PROFILE_SUCCESS,
  payload: data,
});

export const fetchProfileFail = (error) => ({
  type: FETCH_PROFILE_FAIL,
  error,
});

export const fetchProfile = () => (dispatch) => {
  dispatch(fetchProfileStart());

  const token = localStorage.getItem("jwtToken");

  fetch("/api/myprofile", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => dispatch(fetchProfileSuccess(data)))
    .catch((error) => dispatch(fetchProfileFail(error.message)));
};
