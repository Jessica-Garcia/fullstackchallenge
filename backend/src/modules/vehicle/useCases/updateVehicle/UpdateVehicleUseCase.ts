import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { IRegisterVehicleDTO } from "../../dtos/IRegisterVehicleDTO";
import { Vehicle } from "../../entities/Vehicle";
import { IVehiclesRepository } from "../../repositories/IVehiclesRepository";

interface IRequest {
  id: string;
}

@injectable()
class UpdateVehicleUseCase {
  constructor(
    @inject('VehiclesRepository')
    private vehiclesRepository: IVehiclesRepository
  ) {}

  async execute({ id }: IRequest, data: IRegisterVehicleDTO
  ): Promise<Vehicle> {
    const vehicle = await this.vehiclesRepository.findById(id);
    
    if(!vehicle){
      throw new AppError('Vehicle not found', 404);
    }

    const updatedVehicle = await this.vehiclesRepository.update(id, data);
    return updatedVehicle;
  }
}

export { UpdateVehicleUseCase };