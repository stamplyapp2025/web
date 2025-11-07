import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import PricingPage from "./pages/pricing";
import Header from "./components/header";
import SupportPage from "./pages/support";
import PrivacyPage from "./pages/privacy";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
