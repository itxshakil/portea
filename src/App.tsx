import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Hero from "./components/Hero"
import AboutPage from "./pages/About"
import BookNowPage from "./pages/BookNow"
import Footer from "./components/Footer"
import ServiceDetail from "./pages/ServiceDetail"
import Service from "./pages/Service"
import NotFound from "./pages/NotFound"
import WhatsAppButton from "./components/Whatsapp.tsx";
import Terms from "./pages/Terms.tsx";
import Privacy from "./pages/Privacy.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";

function App() {
  return (
    <Router>
        <ScrollToTop/>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Hero />} />
             <Route path="/about" element={<AboutPage />} />
             <Route path="/services" element={<Service />} />
             <Route path="/services/:service" element={<ServiceDetail />} />
               <Route path="/book-now" element={<BookNowPage />} />
               <Route path="/terms-conditions" element={<Terms />} />
               <Route path="/privacy-policy" element={<Privacy />} />
               <Route path="*" element={<NotFound />} />
          </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
      </div>
    </Router>
  )
}

export default App
