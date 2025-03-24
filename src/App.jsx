import { Router, Route } from "@solidjs/router";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Mywork from "./components/Mywork";
import Blog_main from "./components/Blog_main";
import Blog_page from "./components/Blog_page";
import GoogleAnalytics from "./components/GoogleAnalytics";

const App = () => {
  return (
    <>
      <Header />
      <Router>
        <GoogleAnalytics />
        <Route path="/" component={Body} />
        <Route path="/home" component={Body} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/mywork" component={Mywork} />
        <Route path="/blog_list" component={Blog_main} />
        <Route path="/blog_list/:id" component={Blog_page} />
      </Router>
      <Footer />
    </>
  );
};

export default App;
