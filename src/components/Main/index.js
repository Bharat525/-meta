import React from "react";
import Home from "../layout/Home/index";
// import Easy from "../layout/Easy/index";
import Network from "../layout/Network";
import OpenSource from "../layout/openSource";
// import Blog from "../layout/Blog";
import Footer from "../Footer/index";
import Contact from "../Contact/index"
// import Policy from "../layout/Policy";
// import Term from "../layout/Term";
import "./style.scss";
// import Header from "../Header"
// import Header from "../Header"

const Main = () => {
  return (

    <div className="main">
      {/* <Header/> */}
      <Home />
      {/* <Easy /> */}
      <Network />
      <OpenSource />
      {/* <Blog /> */}
      {/* <Contact /> */}

      {/* <Footer /> */}


    </div>
  );
};

export default Main;
