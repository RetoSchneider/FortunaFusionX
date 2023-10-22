import React, { useState, useEffect, useRef } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { useDispatch, useSelector } from "react-redux";
import backgroundImage from "../../assets/fortuna_fusion_x_logo_no_text.png";
import defaultProfileImage from "../../assets/fortuna_fusion_x_defaultProfileImage.png";
import { fetchProfile } from "../../actions/myProfile/myProfileFetchUserActions";
import { updateUserDetails } from "../../actions/myProfile/myProfileUpdateUserActions";

const MyProfile = () => {
  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.profile.data);
  const isUpdating = useSelector((state) => state.myProfile.isUpdating);
  const updateError = useSelector((state) => state.myProfile.updateError);

  const [username, setUsername] = useState("");
  const [editUsername, setEditUsername] = useState(false);

  const [email, setEmail] = useState("");
  const [editEmail, setEditEmail] = useState(false);

  const usernameRef = useRef(null);
  const emailRef = useRef(null);

  const [profileImage, setProfileImage] = useState(null);
  const imageInputRef = useRef(null);

  const [originalValues, setOriginalValues] = useState({
    username: "",
    email: "",
    profileImage: null,
  });

  const [showCropper, setShowCropper] = useState(false);

  const cropperRef = useRef(null);

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  useEffect(() => {
    if (profileData) {
      setUsername(profileData.username);
      setEmail(profileData.email);
      setProfileImage(profileData.profileImage || defaultProfileImage);
      setOriginalValues({
        username: profileData.username,
        email: profileData.email,
        profileImage: profileData.profileImage || defaultProfileImage,
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

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setProfileImage(URL.createObjectURL(img));
      setShowCropper(true);
    }
  };

  const handleCrop = () => {
    const imageElement = cropperRef?.current;
    const cropper = imageElement?.cropper;
    const croppedImageDataURL = cropper.getCroppedCanvas().toDataURL();
    setProfileImage(croppedImageDataURL);
    setShowCropper(false);
  };

  const handleCancelCrop = () => {
    setShowCropper(false);
    setProfileImage(originalValues.profileImage);
  };

  const handleRedo = () => {
    setUsername(originalValues.username);
    setEmail(originalValues.email);
    setProfileImage(profileData.profileImage);
  };

  const handleSave = () => {
    const updatedUser = {
      id: profileData.id,
      username,
      email,
      profileImage,
    };
    dispatch(updateUserDetails(updatedUser));
  };

  if (isUpdating) {
    return (
      <div className="text-center font-semibold text-xl mt-8">Updating...</div>
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

        <div className="mb-6 relative">
          {showCropper ? (
            <div>
              <Cropper
                ref={cropperRef}
                src={profileImage}
                style={{ height: 400, width: "100%" }}
                viewMode={1}
                aspectRatio={1 / 1}
                guides={false}
                preview=".img-preview"
                background={false}
                dragMode="move"
                cropBoxMovable={true}
                cropBoxResizable={true}
                rotatable={false}
                zoomable={true}
              />
              <button
                className="mt-4 px-7 py-0.5 bg-teal-500 text-white font-bold font-cabin rounded-md hover:bg-teal-400 transform transition-transform duration-100 hover:scale-105 active:scale-95 active:shadow-inner"
                onClick={handleCrop}
              >
                Crop Image
              </button>
              <button
                className="mt-4 ml-4 px-7 py-0.5 bg-red-500 text-white font-bold font-cabin rounded-md hover:bg-red-400 transform transition-transform duration-100 hover:scale-105 active:scale-95 active:shadow-inner"
                onClick={handleCancelCrop}
              >
                Cancel
              </button>
            </div>
          ) : (
            <>
              <img
                src={profileImage ? profileImage : defaultProfileImage}
                alt="Profile"
                className="mx-auto w-48 h-48 border-2 border-gray-100 object-cover rounded-lg"
              />

              <button
                className="absolute bottom-1 right-1"
                onClick={() => imageInputRef.current.click()}
              >
                🖉
              </button>
              <input
                ref={imageInputRef}
                type="file"
                className="hidden"
                onChange={handleImageChange}
              />
            </>
          )}
        </div>

        <div className="mb-5 p-3 bg-gray-100 rounded-md shadow-inner relative font-cabin">
          <label className="block text-gray-600 font-semibold mb-2">
            Username:
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
            Email:
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
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className="px-7 py-0.5 bg-red-500 text-white font-bold font-cabin rounded-md hover:bg-gray-500 transform transition-transform duration-100 hover:scale-105 active:scale-95 active:shadow-inner"
            onClick={handleRedo}
          >
            Redo
          </button>
        </div>
        {updateError && (
          <div className="mt-4 text-red-500 font-semibold">{updateError}</div>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
