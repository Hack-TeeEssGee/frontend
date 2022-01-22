import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./views/loginPage";
import EventsPage from "./views/eventsPage";
import HallPoint from "./views/hallPoint";
import HallPage from "./views/hallPage";
import LandingPage from "./views/landingPage";
import QuickInfo from "./views/quickInfo";
import SocietyPoint from "./views/societyPoint";
import StudentProfile from "./views/studentProfile";

import SuperTokens from "supertokens-auth-react";
import Session from "supertokens-auth-react/recipe/session";
import { SessionAuth } from "supertokens-auth-react/recipe/session";
import { BACKEND_URL, FRONTEND_URL, ONESIGNAL_ID } from "./constants";
import EventUpload from "./views/eventUpload";
import OfficialEventCert from "./views/officialEventCert";

import OneSignal from 'react-onesignal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SocietyPage from "./views/societyPage";
import Contacts from "./views/contacts";
import { useEffect } from "react";
import NewBlog from "./views/newBlog";
import BlogPage from "./views/blogPage";

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

  useEffect(() => {
    OneSignal.init({
      appId: ONESIGNAL_ID
    });
  }, []);

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
          <Route path="/blog/new" element={
            <SessionAuth requireAuth={true} redirectToLogin={() => { window.location.href = `${window.location.origin}/login?role=student` }}>
              <NewBlog />
            </SessionAuth>
          } />
          <Route path="/blog" element={
            <SessionAuth>
              <BlogPage />
            </SessionAuth>
          } />
          <Route path="/student-profile" element={
            <StudentProfile />
          } />
          <Route path="/events/certs" element={
            <OfficialEventCert />
          } />
          <Route path="/events" element={
            <SessionAuth>
              <EventsPage />
            </SessionAuth>
          } />
          <Route path="/events/upload" element={<EventUpload />} />
          <Route path="/society-point/society" element={
            <SessionAuth>
              <SocietyPage />
            </SessionAuth>
          } />
          <Route path="/hall-point/hall" element={
            <SessionAuth>
              <HallPage />
            </SessionAuth>
          } />
          <Route path="/society-point" element={<SocietyPoint />} />
          <Route path="/hall-point" element={<HallPoint />} />
          <Route path="/quickinfo/contacts" element={<Contacts />} />
          <Route path="/quickinfo" element={<QuickInfo />} />
          <Route path="/login/" element={<LoginPage />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
