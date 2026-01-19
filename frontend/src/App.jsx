import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddPlant from "./pages/AddPlant";
import Plants from "./pages/Plants";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<Plants />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add-plant" element={<AddPlant />} />
      </Routes>
    </>
  );
}

export default App;
