import { Routes, Route } from "react-router-dom";

/* 🌍 Public Pages */
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import Plants from "./pages/Plants";

/* 🧩 Dashboard Layout */
import DashboardLayout from "./pages/DashboardLayout";
import DashboardHome from "./pages/DashboardHome";

/* 🌿 Dashboard Pages */
import Explorer from "./pages/Explorer";
import GuidedTours from "./pages/GuidedTours";      // QUIZ
import LearningTours from "./pages/LearningTours";  // GUIDED TOURS
import Bookmarks from "./pages/Bookmarks";
import AllPlants from "./pages/AllPlants";
import AdvancedSearch from "./pages/AdvancedSearch";
import AddPlant from "./pages/AddPlant";
import PlantDetail from "./pages/PlantDetail";
import Plant3DView from "./pages/Plant3DView";

/* 📝 OPTIONAL (create later if not yet) */
import Multimedia from "./pages/Multimedia";

function App() {
  return (
    <Routes>
      {/* 🌍 Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/plants" element={<Plants />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />

      {/* 🧩 Dashboard Routes */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />

        {/* 🌿 Plants */}
        <Route path="plants" element={<AllPlants />} />
        <Route path="plants/:id" element={<PlantDetail />} />
        <Route path="plants/:id/3d" element={<Plant3DView />} />

        {/* 🔍 Explorer */}
        <Route path="explorer" element={<Explorer />} />

        {/* 🧠 Quiz */}
        <Route path="quiz" element={<GuidedTours />} />

        {/* 📘 Guided Learning Tours */}
        <Route path="learning-tours" element={<LearningTours />} />

        {/* 🎥 Multimedia */}
        <Route path="multimedia" element={<Multimedia />} />

        {/* ⭐ Other */}
        <Route path="bookmarks" element={<Bookmarks />} />
        <Route path="add-plant" element={<AddPlant />} />
        <Route path="search" element={<AdvancedSearch />} />
      </Route>
    </Routes>
  );
}

export default App;
