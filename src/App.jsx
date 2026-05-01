import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Mywork from "./components/Mywork/Mywork";
import Blog_main from "./components/Blog_main/Blog_main";
import Blog_page from "./components/Blog_page/Blog_page";
import GoogleAnalytics from "./components/GoogleAnalytics/GoogleAnalytics";

const App = () => {
  return (
    <BrowserRouter>
      <GoogleAnalytics />
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/home" element={<Body />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mywork" element={<Mywork />} />
        <Route path="/blog_list" element={<Blog_main />} />
        <Route path="/blog_list/:id" element={<Blog_page />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
