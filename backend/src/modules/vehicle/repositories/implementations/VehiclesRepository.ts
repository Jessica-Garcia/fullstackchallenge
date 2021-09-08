import { getRepository, Repository } from "typeorm";
import { IRegisterVehicleDTO } from "../../dtos/IRegisterVehicleDTO";
import { Vehicle } from "../../entities/Vehicle";
import { IVehiclesRepository } from "../IVehiclesRepository";

class VehiclesRepository implements IVehiclesRepository{
  private repository : Repository<Vehicle>;

  constructor() {
    this.repository = getRepository(Vehicle);
  }
  async create({
    plate,
    brand,
    version,
    year,
    model,
  }: IRegisterVehicleDTO): Promise<void> {
    const vehicle = this.repository.create({
      plate,
      brand,
      version,
      year,
      model,
    });
    await this.repository.save(vehicle);
  }

  async findByPlate(plate: string): Promise<Vehicle> {
    const vehicle = await this.repository.findOne({ plate });
    return vehicle;
  }

  async findById(id: string): Promise<Vehicle> {
    const vehicle = await this.repository.findOne(id);
    return vehicle;
  }

  async list(): Promise<Vehicle[]> {
    const vehicles = await this.repository.find();
    return vehicles;
  }

  async update(id: string, data: IRegisterVehicleDTO): Promise<Vehicle> {
    await this.repository.update(id, data);
    
    const updatedVehicle = await this.repository.findOne(id);
    return updatedVehicle;
  }
}

export { VehiclesRepository }