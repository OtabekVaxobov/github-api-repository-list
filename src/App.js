import React from "react";
import "./styles.css";
import Fetcher from "./Fetcher";
import More from "./More";

import { Switch, Route, BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Fetcher} exact />

          <Route path="/more/:id" component={More} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
