import { useEffect } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import WorkDetail from "./pages/WorkDetail";
import GoogleAnalytics from "./components/GoogleAnalytics/GoogleAnalytics";

const ScrollManager = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // ルート切替直後は DOM が未描画のことがあるので 1 フレーム待つ
      const id = requestAnimationFrame(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView();
      });
      return () => cancelAnimationFrame(id);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

const App = () => (
  <BrowserRouter>
    <GoogleAnalytics />
    <ScrollManager />
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Navigate to="/" replace />} />
      <Route path="/works/:slug" element={<WorkDetail />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default App;
