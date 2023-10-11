import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import backgroundImage from "../../assets/fortuna_fusion_x_logo_no_text.png";
import { fetchProfile } from "../../actions/myProfile/myProfileFetchUserActions";

const MyProfile = () => {
  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.profile.data);
  const isLoading = useSelector((state) => state.profile.isLoading);

  const [username, setUsername] = useState("");
  const [editUsername, setEditUsername] = useState(false);

  const [email, setEmail] = useState("");
  const [editEmail, setEditEmail] = useState(false);

  const usernameRef = useRef(null);
  const emailRef = useRef(null);

  const [originalValues, setOriginalValues] = useState({
    username: "",
    email: "",
  });

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  useEffect(() => {
    if (profileData) {
      setUsername(profileData.username);
      setEmail(profileData.email);

      setOriginalValues({
        username: profileData.username,
        email: profileData.email,
      });
    }
  }, [profileData]);

  useEffect(() => {
    if (editUsername) {
      usernameRef.current.focus();
    }
    if (editEmail) {
      emailRef.current.focus();
    }
  }, [editUsername, editEmail]);

  const handleBlur = (type) => {
    if (type === "username") {
      setEditUsername(false);
    } else if (type === "email") {
      setEditEmail(false);
    }
  };

  const handleRedo = () => {
    setUsername(originalValues.username);
    setEmail(originalValues.email);
  };

  if (isLoading) {
    return (
      <div className="text-center font-semibold text-xl mt-8">Loading...</div>
    );
  }

  return (
    <div
      className="flex flex-col items-center justify-center min-w-full min-h-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="w-full max-w-md p-8 m-4 bg-white shadow-xl rounded-lg border border-gray-200">
        <h1 className="mb-6 text-3xl font-cabin font-bold text-center text-black">
          My Profile
        </h1>

        <div className="mb-5 p-3 bg-gray-100 rounded-md shadow-inner relative font-cabin">
          <label className="block text-gray-600 font-semibold mb-2">
            Username
          </label>
          {editUsername ? (
            <input
              ref={usernameRef}
              className="w-full p-2 border rounded-md bg-gray-200 opacity-70"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onBlur={() => handleBlur("username")}
            />
          ) : (
            <span className="text-gray-800 block p-2 bg-gray-200 opacity-70 rounded-md">
              {username}
            </span>
          )}
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-black transition duration-300"
            onClick={() => setEditUsername(true)}
          >
            🖉
          </button>
        </div>

        <div className="mb-5 p-3 bg-gray-100 rounded-md shadow-inner relative font-cabin">
          <label className="block text-gray-600 font-semibold mb-2">
            Email
          </label>
          {editEmail ? (
            <input
              ref={emailRef}
              className="w-full p-2 border rounded-md bg-gray-200 opacity-70"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => handleBlur("email")}
            />
          ) : (
            <span className="text-gray-800 block p-2 bg-gray-200 opacity-70 rounded-md">
              {email}
            </span>
          )}
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-black transition duration-300"
            onClick={() => setEditEmail(true)}
          >
            🖉
          </button>
        </div>

        <div className="flex justify-start mt-4 space-x-2">
          <button
            className="px-7 py-0.5 bg-teal-500 text-white font-bold font-cabin rounded-md hover:bg-teal-400 transform transition-transform duration-100 hover:scale-105 active:scale-95 active:shadow-inner"
            onClick={() => {
              /* Dispatch save action here */
            }}
          >
            Save
          </button>
          <button
            className="px-7 py-0.5 bg-gray-400 text-white font-bold font-cabin rounded-md hover:bg-gray-500 transform transition-transform duration-100 hover:scale-105 active:scale-95 active:shadow-inner"
            onClick={handleRedo}
          >
            Redo
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
