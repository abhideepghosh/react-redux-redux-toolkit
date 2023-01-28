import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../features/user";

const Profile = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h4>username: {user.username}</h4>
      <h4>password: {user.password}</h4>
      <button
        style={{
          color: "white",
          background: "transparent",
          border: "2px white solid",
          borderRadius: "5px",
          padding: "5px",
          margin: "5px",
        }}
        onClick={() => {
          dispatch(
            logout()
          );
          navigate("/");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
