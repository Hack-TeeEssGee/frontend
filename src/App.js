import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./views/landingPage";
import LoginPage from "./views/loginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login/" element={<LoginPage />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
