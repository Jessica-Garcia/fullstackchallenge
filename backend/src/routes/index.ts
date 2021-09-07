import { application, Router } from "express";
import { vehiclesRoutes } from "./vehicles.routes";

const router = Router();

router.use('/vehicles', vehiclesRoutes);

export { router }