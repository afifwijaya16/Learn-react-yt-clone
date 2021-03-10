import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
// component
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
// pages
import HomeScreen from "./screens/homeScreen/HomeScreen";
import LoginScreen from "./screens/loginScreen/LoginScreen";
import WatchScreen from "./screens/watchScreen/WatchScreen";
// redux
import { useSelector } from "react-redux";
// router-dom
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
// scss
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
  const { accessToken, loading } = useSelector((state) => state.auth);

  const history = useHistory();

  useEffect(() => {
    if (!loading && !accessToken) {
      history.push("/auth");
    }
  }, [accessToken, loading, history]);
  return (
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
      <Route path="/watch/:id" exact>
        <Layout>
          <WatchScreen />
        </Layout>
      </Route>
      <Route>
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};

export default App;
