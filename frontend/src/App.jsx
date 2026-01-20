import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import Plants from "./pages/Plants";
import DashboardLayout from "./pages/DashboardLayout";
import DashboardHome from "./pages/DashboardHome";
import Explorer from "./pages/Explorer";
import Tours from "./pages/GuidedTours";
import Bookmarks from "./pages/Bookmarks";
import AllPlants from "./pages/AllPlants";
import AdvancedSearch from "./pages/AdvancedSearch";
import AddPlant from "./pages/AddPlant";
import PlantDetail from "./pages/PlantDetail";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/plants" element={<Plants />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />
        <Route path="/dashboard/plants/:id" element={<PlantDetail />} />
        <Route path="/dashboard/add-plant" element={<AddPlant />} />
        <Route path="explorer" element={<Explorer />} />
        <Route path="tours" element={<Tours />} />
        <Route path="bookmarks" element={<Bookmarks />} />
        <Route path="plants" element={<AllPlants />} />
        <Route path="search" element={<AdvancedSearch />} />
      </Route>
    </Routes>
  );
}

export default App;
