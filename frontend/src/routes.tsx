import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from './pages/Home'
import Vehicles from './pages/Vehicles'
import VehiclesForm from './pages/Vehicles/Form/index'

const Routes: React.FC = () => {
  return(
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/vehicles" exact component={Vehicles}/>
      <Route path="/vehicles_register" exact component={VehiclesForm}/>
    </Switch>
  );
}

export default Routes;