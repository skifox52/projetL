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
// const user = JSON.parse(localStorage.getItem("user"))

//Create Cat

export const createCat = createAsyncThunk(
  "cat/createCat",
  async (catData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await catService.createCategories(catData, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

//Delete Cat
export const deleteCat = createAsyncThunk(
  "cat/deleteCat",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await catService.deleteCategorie(id, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      thunkAPI.rejectWithValue(message)
    }
  }
)

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
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCat.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getCat.fulfilled, (state, action) => {
        state.cats = action.payload
        state.isLoading = false
        state.isSuccess = true
      })
      .addCase(getCat.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(createCat.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createCat.fulfilled, (state, action) => {
        state.cats.push(action.payload)
        state.isLoading = false
        state.isSuccess = true
      })
      .addCase(createCat.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteCat.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteCat.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.cats = state.cats.filter((cat) => cat._id !== action.payload._id)
      })
      .addCase(deleteCat.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = catSlice.actions
export default catSlice.reducer
