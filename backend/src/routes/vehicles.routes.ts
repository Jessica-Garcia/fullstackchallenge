import { Router } from "express";
import { CreateVehicleController } from "../modules/vehicle/useCases/createVehicle/CreateVehicleController";
import { GetVehicleController } from "../modules/vehicle/useCases/getVehicle/GetVehicleController";
import { ListVehiclesController } from "../modules/vehicle/useCases/listVehicles/ListVehiclesController";
import { UpdateVehicleController } from "../modules/vehicle/useCases/updateVehicle/UpdateVehicleController";

const vehiclesRoutes = Router();

const createVehicleController = new CreateVehicleController();
const listVehiclesController = new ListVehiclesController();
const getVehicleController = new GetVehicleController();
const updateVehicleController = new UpdateVehicleController();

vehiclesRoutes.post('/', createVehicleController.handle);
vehiclesRoutes.get('/', listVehiclesController.handle);
vehiclesRoutes.get('/:id', getVehicleController.handle);
vehiclesRoutes.put('/:id', updateVehicleController.handle)

export { vehiclesRoutes };