import { IRegisterVehicleDTO } from "../dtos/IRegisterVehicleDTO";
import { Vehicle } from "../entities/Vehicle";

interface IVehiclesRepository{
  create(data: IRegisterVehicleDTO): Promise<void>;
  findByPlate(plate: string): Promise<Vehicle>;
  findById(id: string): Promise<Vehicle>;
  list(): Promise<Vehicle[]>;
}

export { IVehiclesRepository }