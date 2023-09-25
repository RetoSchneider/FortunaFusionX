import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/loginPage/loginPage";
import RegisterPage from "./pages/registerPage/registerPage";
import MainPage from "./pages/mainPage/mainPage";
import "./index.css";
import ProfilePage from "./pages/profilePage/profilePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/login/register" element={<RegisterPage />} />
          <Route path="/mainpage" element={<MainPage />} />
          <Route path="/mainpage/myprofile" element={<ProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
