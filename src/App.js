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
import EventUpload from "./views/eventUpload";
import OfficialEventCert from "./views/officialEventCert";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    <div>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <BrowserRouter>
        <Routes>
          <Route path="/student-profile" element={
            <SessionAuth requireAuth={true} redirectToLogin={() => {window.location.href=`${window.location.origin}/login?role=student`}}>
              {/*Components that require to be protected by authentication*/}
              <StudentProfile />
            </SessionAuth>
          } />
          <Route path="/events/certs" element={
            // <SessionAuth requireAuth={true} redirectToLogin={() => {window.location.href=`${window.location.origin}/login?role=tsg`}}>
              <OfficialEventCert />
            // </SessionAuth>
          } />
          <Route path="/events" element={
            <SessionAuth>
              <EventsPage />
            </SessionAuth>
          } />
          <Route path="/events/upload" element={<EventUpload />} />
          <Route path="/society-point" element={<SocietyPoint />} />
          <Route path="/quickinfo" element={<QuickInfo />} />
          <Route path="/login/" element={<LoginPage />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
