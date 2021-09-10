import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from './pages/Home'
import Vehicles from './pages/Vehicles'
import VehiclesForm from './pages/Vehicles/Form'
import VehiclesDetail from './pages/Vehicles/Detail'

const Routes: React.FC = () => {
  return(
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/vehicles" exact component={Vehicles}/>
      <Route path="/vehicles_register" exact component={VehiclesForm}/>
      <Route path="/vehicles_register/:id" exact component={VehiclesForm}/>
      <Route path="/vehicles/:id" exact component={VehiclesDetail}/>
    </Switch>
  );
}

export default Routes;