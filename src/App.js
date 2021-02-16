import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import HomeScreen from "./screens/homeScreen/HomeScreen";

import "./_app.scss";

const App = () => {
  const [sidebar, toogleSidebar] = useState(false);

  const handleToogleSidebar = () => toogleSidebar((value) => !value);
  return (
    <>
      <Header handleToogleSidebar={handleToogleSidebar} />
      <div className="app__container border border-info">
        <Sidebar sidebar={sidebar} handleToogleSidebar={handleToogleSidebar} />
        <Container fluid className="app_main border border-warning">
          <HomeScreen />
        </Container>
      </div>
    </>
  );
};

export default App;
