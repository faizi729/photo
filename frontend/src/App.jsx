import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Form from "./pages/Form";
import Demo from "./pages/Demo";
import ProductGrid from "./pages/Gift";
import PaymentSuccess from "./pages/Paymentsuccess";

function AppContent() {
  const location = useLocation();

  // Define the routes where Navbar and Footer should be hidden
  const hideNavFooterRoutes = ["/login", "/register"];
  const hideNavFooter = hideNavFooterRoutes.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {!hideNavFooter && <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/gift" element={<ProductGrid />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/form/:id" element={<Form />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
        </Routes>
      </main>
      {!hideNavFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
