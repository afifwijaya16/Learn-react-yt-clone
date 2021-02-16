import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import LoginScreen from "./screens/loginScreen/LoginScreen";

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import "./_app.scss";

const Layout = ({ children }) => {
  const [sidebar, toogleSidebar] = useState(false);

  const handleToogleSidebar = () => toogleSidebar((value) => !value);

  return (
    <>
      <Header handleToogleSidebar={handleToogleSidebar} />
      <div className="app__container">
        <Sidebar sidebar={sidebar} handleToogleSidebar={handleToogleSidebar} />
        <Container fluid className="app_main">
          {children}
        </Container>
      </div>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Layout>
            <HomeScreen />
          </Layout>
        </Route>
        <Route path="/auth" exact>
          <LoginScreen />
        </Route>
        <Route path="/search" exact>
          <Layout>
            <h1>Search Results</h1>
          </Layout>
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
