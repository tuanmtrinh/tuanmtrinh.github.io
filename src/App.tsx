import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { Footer } from "./components/Footer";
import { Home } from "./components/pages/Home";
import { AboutPage } from "./components/pages/AboutPage";
import { ResearchPage } from "./components/pages/ResearchPage";
import { PublicationsPage } from "./components/pages/PublicationsPage";
import { ContactPage } from "./components/pages/ContactPage";
import { UpdatesPage } from "./components/pages/UpdatesPage";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Sidebar />
        <div className="lg:ml-64 flex flex-col min-h-screen">
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/research" element={<ResearchPage />} />
              <Route path="/publications" element={<PublicationsPage />} />
              <Route path="/updates" element={<UpdatesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              {/* Catch-all route - redirect to home */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}
