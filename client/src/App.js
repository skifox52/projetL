import Footer from "./components/Footer"
import Header from "./components/Header"
import Login from "./pages/Login"
import Register from "./pages/Register"
import { Route, Routes, BrowserRouter } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Dashboard from "./pages/Dashboard"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default App
