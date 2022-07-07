import {createSlice} from "@reduxjs/toolkit";
import { signupUser, loginUser } from "../../AsyncThunk/AuthService/AuthServices";

const initialState = {
    authToken: "" || JSON.parse(localStorage.getItem("authToken")),
    userData: null || JSON.parse(localStorage.getItem("userData")),
    authStatus: "idle",
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.authToken="";
            state.user=null;
            state.authStatus="idle"
            localStorage.removeItem("authToken");
            localStorage.removeItem("userToken");
        },
    },
    extraReducers: {
        [signupUser.pending]: (state) => {
            state.authStatus = 'loading'
        },
        [signupUser.fulfilled]: (state, action) => {
            state.userData = action.payload.createdUser;
            state.authToken = action.payload.encodedToken;
            state.authStatus = "success"
            localStorage.setItem("authToken", JSON.stringify(action.payload.encodedToken));
            localStorage.setItem("userData", JSON.stringify(action.payload.createdUser));
            console.log("Signup fullfilled")
        },
        [signupUser.rejected]: (state) => {
            state.authStatus = "failed";
            console.log("Signup rejected")
        },
        [loginUser.pending]: (state) => {
            state.authStatus = 'loading'
        },
        [loginUser.fulfilled]: (state, action) => {
            state.userData = action.payload.foundUser;
            state.authToken = action.payload.encodedToken;
            state.authStatus = "success"
            localStorage.setItem("authToken", JSON.stringify(action.payload.encodedToken));
            localStorage.setItem("userData", JSON.stringify(action.payload.foundUser));
            console.log("Login fullfilled")
        },
        [loginUser.rejected]: (state) => {
            state.authStatus = 'failed'
            console.log("Login rejected")
        },
    }
})

export const {logout} = authSlice.actions;
export const authReducer = authSlice.reducer;