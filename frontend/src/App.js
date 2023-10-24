import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./pages/loginPage/loginPage";
import RegisterPage from "./pages/registerPage/registerPage";
import MainPage from "./pages/mainPage/mainPage";
import "./index.css";
import MyProfilePage from "./pages/myProfilePage/myProfilePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} index />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/login/register" element={<RegisterPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/main/myprofile" element={<MyProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;