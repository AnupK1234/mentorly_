import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Blog from "./components/blog";
import Event from "./components/event";
import Footer from "./components/footer";
import Goals from "./components/goals";
import MenteeCalendarIntegration from "./components/mentee/CalendarIntegration";
import MenteeFeedback from "./components/mentee/FeedbackAndRatings";
import Mentee from "./components/mentee/Mentee";
import MentorshipResources from "./components/mentee/MentorshipResources";
import MenteeNotifications from "./components/mentee/Notifications";
import SendRequest from "./components/mentee/SendRequest";
import UpcomingSessions from "./components/mentee/UpcomingSessions";
import ViewMentorshipHistory from "./components/mentee/ViewMentorship";
import CalendarIntegration from "./components/mentor/CalendarIntegration";
import CreateNewMeeting from "./components/mentor/CreateNewMeeting";
import FeedbackAndRatings from "./components/mentor/FeedbackAndRatings";
import Mentor from "./components/mentor/Mentor";
import MentorSettings from "./components/mentor/MentorSettings";
import MentorshipHistory from "./components/mentor/MentorshipHistory";
import MentorshipProgressTracking from "./components/mentor/MentorshipProgressTracking";
import MentorshipRequests from "./components/mentor/MentorshipRequest";
import MentorshipTipsAndResources from "./components/mentor/MentorshipTipsAndResources";
import Notifications from "./components/mentor/Notifications";
import Navbar from "./components/navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/blogs" element={<Blog />} exact />
          <Route path="/events" element={<Event />} exact />
          <Route path="/goal" element={<Goals />} exact />
          <Route path="/mentor" element={<Mentor />} exact />
          <Route path="/mentee" element={<Mentee />} exact />
          <Route
            path="/mentorship_requests"
            element={<MentorshipRequests />}
            exact
          />
          <Route
            path="/mentorship_history"
            element={<MentorshipHistory />}
            exact
          />
          <Route
            path="/create_new_meeting"
            element={<CreateNewMeeting />}
            exact
          />
          <Route
            path="/mentorship_progress_tracking"
            element={<MentorshipProgressTracking />}
            exact
          />
          <Route
            path="/feedback_and_ratings"
            element={<FeedbackAndRatings />}
            exact
          />
          <Route path="/notifications" element={<Notifications />} exact />
          <Route
            path="/calendar_integration"
            element={<CalendarIntegration />}
            exact
          />
          <Route path="/mentor_settings" element={<MentorSettings />} exact />
          <Route
            path="/mentorship_tips_and_resources"
            element={<MentorshipTipsAndResources />}
            exact
          />
          <Route
            path="/view_mentorship_history"
            element={<ViewMentorshipHistory />}
            exact
          />
          <Route
            path="/view_upcoming_sessions"
            element={<UpcomingSessions />}
            exact
          />
          <Route
            path="/mentee_give_feedback_and_ratings"
            element={<MenteeFeedback />}
            exact
          />
          <Route
            path="/access_mentorship_resources"
            element={<MentorshipResources />}
            exact
          />
          <Route
            path="/mentee_calendar_integration"
            element={<MenteeCalendarIntegration />}
            exact
          />
          <Route
            path="/send_mentorship_requests"
            element={<SendRequest />}
            exact
          />
          <Route
            path="/mentee_receive_notifications"
            element={<MenteeNotifications />}
            exact
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
