import React from "react";
import {Header} from "./components";
import {HomePage,DetailPage,LoginPage} from "./pages";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header/>
        <Switch>
          <Route path="/login">
              <LoginPage/>
          </Route>
          <Route path="/detail/:id">
            <DetailPage/>
          </Route>
          <Route path="/">
            <HomePage/> 
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
