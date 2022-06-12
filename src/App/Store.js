import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from '../Features/Authentication/AuthSlice'

export const store = configureStore({
  reducer: {
      auth: authReducer,
  },
}
);