import React, { useState, useEffect } from "react";
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

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  useEffect(() => {
    if (profileData) {
      setUsername(profileData.username);
      setEmail(profileData.email);
    }
  }, [profileData]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="flex flex-col items-center justify-center min-w-full min-h-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="w-full max-w-lg p-8 m-4 bg-gray-50 shadow-md rounded-md border border-gray-300">
        <h1 className="mb-8 text-2xl font-cabin font-bold text-center text-black">
          My Profile
        </h1>

        <div className="mb-4 flex justify-between">
          {editUsername ? (
            <input
              className="w-2/3 p-2 border rounded-md"
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          ) : (
            <span className="w-2/3">{username}</span>
          )}
          <button onClick={() => setEditUsername(!editUsername)}>Edit</button>
        </div>

        <div className="mb-4 flex justify-between">
          {editEmail ? (
            <input
              className="w-2/3 p-2 border rounded-md"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          ) : (
            <span className="w-2/3">{email}</span>
          )}
          <button onClick={() => setEditEmail(!editEmail)}>Edit</button>
        </div>

        <div className="mb-4 flex justify-between">
          <input
            className="w-2/3 p-2 border rounded-md"
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        <div className="flex justify-center">
          <button className="px-4 py-2 font-cabin font-bold text-white bg-teal-500 hover:bg-teal-400 rounded-md transform transition-transform duration-100 hover:scale-105 active:scale-95">
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
