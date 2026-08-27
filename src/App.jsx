import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import SelectedWorks from "./components/SelectedWorks";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";
import LoadingScreen from "./components/LoadingScreen";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  const [path, setPath] = useState(window.location.pathname);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleNavigation = () => {
      setPath(window.location.pathname);
    };

    window.addEventListener("popstate", handleNavigation);
    window.addEventListener("wells:navigate", handleNavigation);

    return () => {
      window.removeEventListener("popstate", handleNavigation);
      window.removeEventListener("wells:navigate", handleNavigation);
    };
  }, []);

  const currentPath = path.replace(/\/$/, "") || "/";

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <Navbar />

      {currentPath === "/about" ? (
        <AboutPage />
      ) : currentPath === "/portfolio" ? (
        <PortfolioPage />
      ) : currentPath === "/services" ? (
        <ServicesPage />
      ) : currentPath === "/contact" ? (
        <ContactPage />
      ) : (
        <>
          <Hero />
          <SelectedWorks />
          <Testimonials />
          <CallToAction />
        </>
      )}

      <Footer />
    </>
  );
}
