import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from '../Redux/Slice/AuthSlice/AuthSlice';
import postReducer from '../Redux/Slice/PostSlice/PostSlice';
import { userReducer } from '../Redux/Slice/UserSlice/UserSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postReducer,
    // comments: commentReducer,
    users: userReducer
  },
}
);