import React from "react";
import { BrowserRouter as Router, Switch, Route , useHistory} from "react-router-dom";
import LandingPage from "./page/landing";
import Main from "./page/main";
import Donations from "./page/donation"


export default function BasicExample() {
  let history = useHistory()
  return (
    <Router>
      <Switch>
        <Route path="/app" component={Main} history={history}/>
        <Route path="/donation" component={Donations} history={history} />
        <Route path="/" component={LandingPage} />
      </Switch>
    </Router>
  );
}
