import axios from "axios"
const API_URI = "/categories/"

//get Cat

const getCategories = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.get(API_URI, config)
  return response.data
}

//post Cat
const createCategories = async (catData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.post(API_URI, catData, config)
  return response.data
}

//Delete cat

const deleteCategorie = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.delete(API_URI + id, config)
  return response.data
}

//update cat
const updateCat = async (id, catData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.put(API_URI + id, catData, config)
  return response.data
}

const catService = {
  getCategories,
  createCategories,
  deleteCategorie,
  updateCat,
}

export default catService
