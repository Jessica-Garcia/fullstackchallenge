import { Router } from "express";
import { CreateVehicleController } from "../modules/vehicle/useCases/createVehicle/CreateVehicleController";
import { GetVehicleController } from "../modules/vehicle/useCases/getVehicle/GetVehicleController";
import { ListVehiclesController } from "../modules/vehicle/useCases/listVehicles/ListVehiclesController";

const vehiclesRoutes = Router();

const createVehicleController = new CreateVehicleController();
const listVehiclesController = new ListVehiclesController();
const getVehicleController = new GetVehicleController();

vehiclesRoutes.post('/', createVehicleController.handle);
vehiclesRoutes.get('/', listVehiclesController.handle);
vehiclesRoutes.get('/:id', getVehicleController.handle);

export { vehiclesRoutes };