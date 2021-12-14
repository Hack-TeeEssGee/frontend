import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./views/loginPage";
import EventsPage from "./views/eventsPage";
import LandingPage from "./views/landingPage";
import QuickInfo from "./views/quickInfo";
import SocietyPoint from "./views/societyPoint";
import StudentProfile from "./views/studentProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/student-profile" element={<StudentProfile />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/society-point" element={<SocietyPoint />} />
        <Route path="/views/quickinfo" element={<QuickInfo />} />
        <Route path="/login/" element={<LoginPage />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
