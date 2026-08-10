import "./App.css";
import NavBar from "./Pages/NavBar";
import OpenPage from "./Pages/OpenPage";
import Login from "./Pages/RegLog/Login";
import Register from "./Pages/RegLog/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<OpenPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
