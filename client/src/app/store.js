import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../features/auth/authSlice"
import catReducer from "../features/cat/catSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cat: catReducer,
  },
})
