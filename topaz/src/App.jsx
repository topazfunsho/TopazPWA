import Register from "./pages/Register";
import Login from "./pages/Login";
import Onboarding from "./components/Onboarding";
import Home from "./pages/Home";
import Coming from "./components/Coming";
import ExpertOption from "./pages/ExpertOption";
import About from "./pages/About";
import Settings from "./pages/Settings";
import Notifications from "./components/Notifications";
import History from "./pages/History";
import './App.css'
import { useScreenSize } from "./hooks/useScreenSize";
import { Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";

function App() {

  const width = useScreenSize();

  return (
    <div>
      {width < 768 ? <MobileLayout /> : <DesktopLayout />}
    </div>
  )
}

function MobileLayout() {
  return (
    <Routes>
      <Route path="/" element={<Onboarding />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/coming" element={<Coming />} />
      <Route path="/expertoption" element={<ExpertOption />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/about" element={<About />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/history" element={<History />} />
      <Route path="/notifications" element={<Notifications />} />
    </Routes>
  );
}

function DesktopLayout() {
  return (
    <Routes>
      <Route path="/" element={<Onboarding />} />
    </Routes>
  );
}

export default App
