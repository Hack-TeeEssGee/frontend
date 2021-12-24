import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./views/loginPage";
import EventsPage from "./views/eventsPage";
import LandingPage from "./views/landingPage";
import QuickInfo from "./views/quickInfo";
import SocietyPoint from "./views/societyPoint";
import StudentProfile from "./views/studentProfile";

import SuperTokens from "supertokens-auth-react";
import Session from "supertokens-auth-react/recipe/session";
import { SessionAuth } from "supertokens-auth-react/recipe/session";
import { BACKEND_URL, FRONTEND_URL } from "./constants";

SuperTokens.init({
  appInfo: {
      // learn more about this on https://supertokens.io/docs/session/appinfo
      appName: "kgpverse",
      apiDomain: BACKEND_URL,
      websiteDomain: FRONTEND_URL
  },
  recipeList: [
      Session.init()
  ]
});

function App() {
  return (
    <BrowserRouter>
      <SessionAuth requireAuth={true} redirectToLogin={() => window.location.href = `${window.location.origin}/login?role=student`}>
        <Routes>
          <Route path="/student-profile" element={<StudentProfile />} />
        </Routes>
      </SessionAuth>
      <SessionAuth>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </SessionAuth>
      <Routes>
        <Route path="/events" element={<EventsPage />} />
        <Route path="/society-point" element={<SocietyPoint />} />
        <Route path="/quickinfo" element={<QuickInfo />} />
        <Route path="/login/" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
