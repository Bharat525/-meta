import Header from "./components/Header/";
import Main from "./components/Main/index";
import Footer from "./components/Footer/"
import { Routes, Route } from "react-router-dom";
import Term from "./components/layout/Term";
import Policy from "./components/layout/Policy";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        {/* <Route path="/" element={<Header/> }/> */}
        <Route path="/" element={<Main />} />
        <Route path="term" element={<Term />} />
        <Route path="policy" element={<Policy />} />
        <Route path="contact" element={<Contact />} />

        {/* <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
