import { DeleteResult } from "typeorm";
import { IRegisterVehicleDTO } from "../dtos/IRegisterVehicleDTO";
import { Vehicle } from "../entities/Vehicle";

interface IVehiclesRepository{
  create(data: IRegisterVehicleDTO): Promise<void>;
  findByPlate(plate: string): Promise<Vehicle>;
  findById(id: string): Promise<Vehicle>;
  list(): Promise<Vehicle[]>;
  update(id: string, data: IRegisterVehicleDTO): Promise<Vehicle>;
  delete(id: string): Promise<DeleteResult>;
}

export { IVehiclesRepository }