import { Router } from "express";
import { CreateVehicleController } from "../modules/vehicle/useCases/CreateVehicleController";

const vehiclesRoutes = Router();

const createVehicleController = new CreateVehicleController();

vehiclesRoutes.post('/', createVehicleController.handle);

export { vehiclesRoutes };