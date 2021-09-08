import { Router } from "express";
import { CreateVehicleController } from "../modules/vehicle/useCases/createVehicle/CreateVehicleController";
import { ListVehiclesController } from "../modules/vehicle/useCases/listVehicles/ListVehiclesController";

const vehiclesRoutes = Router();

const createVehicleController = new CreateVehicleController();
const listVehiclesController = new ListVehiclesController();

vehiclesRoutes.post('/', createVehicleController.handle);
vehiclesRoutes.get('/', listVehiclesController.handle);


export { vehiclesRoutes };