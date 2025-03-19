import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import FeedPage from "./pages/feed/FeedPage"
import AlumniPage from "./pages/alumni/AlumniPage"
import ProfilePage from "./pages/dashboard/ProfilePage"
import DashboardPage from "./pages/dashboard/DashboardPage"

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<FeedPage />} />
            <Route path="/feed" element={<FeedPage />} />
            <Route path="/alumni" element={<AlumniPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/dashboard/profile" element={<ProfilePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App

