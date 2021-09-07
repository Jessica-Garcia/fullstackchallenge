import { container } from "tsyringe";

import { IVehiclesRepository } from "../../modules/vehicle/repositories/IVehiclesRepository";
import { VehiclesRepository } from "../../modules/vehicle/repositories/implementations/VehiclesRepository";

container.registerSingleton<IVehiclesRepository>(
  "VehiclesRepository",
  VehiclesRepository
);