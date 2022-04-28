import axios from "axios"

const API_URI = "/categories/"

const getCategories = async (token) => {
  const config = {
    Headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = axios.get(API_URI, config)
  return response.data
}

const catService = {
  getCategories,
}

export default catService
