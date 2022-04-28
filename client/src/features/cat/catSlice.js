import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import catService from "./catService"

//Initial State

const initialState = {
  cats: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
}
//Get user from local storage
const user = JSON.parse(localStorage.getItem("user"))

//Get Cats

export const getCat = createAsyncThunk("cat/getCat", async (_, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token
    return await catService.getCategories(token)
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

//catSlice

const catSlice = createSlice({
  name: "cat",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false
      state.isLoading = false
      state.isSuccess = false
      state.message = false
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCat.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getCat.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.cats = action.payload
      })
      .addCase(getCat.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = catSlice.actions
export default catSlice.reducer
