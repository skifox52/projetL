import axios from "axios"

const API_URI = "/categories/"

const getCategories = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.get(API_URI, config)
  return response.data
}

const createCategories = async (catData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.post(API_URI, catData, config)
  return response.data
}

const catService = {
  getCategories,
  createCategories,
}

export default catService
