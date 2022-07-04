import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

// views without layouts
import AboutUs from "views/AboutUs.js";
import Landing from "views/Landing.js";
import Profile from "views/Profile.js";
import Index from "views/Index.js";
import Testimonials from "views/Testimonials.js";
import Jobs from "views/Jobs.js";
import Contact from "views/Contact.js";
import Yogesh from "views/Yogesh.js";
import Palash from "views/Palash.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      <Route path="/admin" component={Admin} />
      <Route path="/auth" component={Auth} />
      {/* add routes without layouts */}
      <Route path="/aboutus" exact component={AboutUs} />
      <Route path="/testimonials" exact component={Testimonials} />
      <Route path="/landing" exact component={Landing} />
      <Route path="/jobs" exact component={Jobs} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/yogesh" exact component={Yogesh} />
      <Route path="/palash" exact component={Palash} />
      <Route path="/" exact component={Index} />
      {/* add redirect for first page */}
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
