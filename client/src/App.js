import Footer from "./components/Footer"
import Header from "./components/Header"
import Login from "./pages/Login"
import Register from "./pages/Register"
import { Route, Routes, BrowserRouter } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
