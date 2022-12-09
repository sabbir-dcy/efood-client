import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Account from "./pages/account/Account"
import Login from "./pages/account/Login"
import Register from "./pages/account/Register"
import Home from "./pages/home/Home"

function App() {
  return <>
    <Navbar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/account" element={<Account/>}>
          <Route index element={<Login/>}></Route>
          <Route path="register" element={<Register/>}></Route>
        </Route>
      </Routes>
    </Navbar>
  </>
}

export default App
