import { loginStart, loginFailure, loginSuccess } from "./userRedux";
import { publicRequest } from "../requestMethods";
import React, { useState } from "react";

export const login = async (dispatch, user) => {
  dispatch(loginStart());

  try {
    const res = await publicRequest.post("/api/auth/login", user)
    .then((response) => {
        localStorage.setItem('token', response.data.accessToken)
        window.location.pathname = '/'
 
    })
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
