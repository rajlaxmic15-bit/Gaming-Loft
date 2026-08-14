import Navbar from "./components/Navbar";
import { RouterProvider, useRouter } from "./context/RouterContext";
import HomePage from "./pages/HomePage";
import ExperiencePage from "./pages/ExperiencePage";
import ArenaPage from "./pages/ArenaPage";
import PricingPage from "./pages/PricingPage";
import GalleryPage from "./pages/GalleryPage";
import WhyUsPage from "./pages/WhyUsPage";
import BookingPage from "./pages/BookingPage";

function AppContent() {
  const { currentPage } = useRouter();

  const renderPage = () => {
    switch (currentPage) {
      case "experience":
        return <ExperiencePage />;
      case "arena":
        return <ArenaPage />;
      case "pricing":
        return <PricingPage />;
      case "gallery":
        return <GalleryPage />;
      case "why-us":
        return <WhyUsPage />;
      case "book":
        return <BookingPage />;
      case "home":
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-clip bg-void text-white antialiased">
      {/* global scanline grain */}
      <div className="noise pointer-events-none fixed inset-0 z-[60]" />

      <Navbar />
      <main>
        {renderPage()}
      </main>
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
