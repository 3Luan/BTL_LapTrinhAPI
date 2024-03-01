import React, { useEffect, useState } from "react";
import "../home/home.css";
import "./profile.css";
import { useDispatch, useSelector } from "react-redux";
import { handleGetUserById } from "../../redux/user/userAction";
import { useParams } from "react-router-dom";
import { refresh } from "../../redux/auth/authSlice";
import MyProfile from "../../components/profile/MyProfile";
import UserProfile from "../../components/profile/UserProfile";

const Profile = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const { userId } = useParams();

  useEffect(() => {
    dispatch(handleGetUserById(userId));
  }, [userId, dispatch]);

  return <>{auth.id === userId ? <MyProfile /> : <UserProfile />}</>;
};

export default Profile;
