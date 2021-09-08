import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { Vehicle } from "../../entities/Vehicle";
import { IVehiclesRepository } from "../../repositories/IVehiclesRepository";

interface IRequest {
  id: string;
}

@injectable()
class GetVehicleUseCase {
  constructor(
    @inject('VehiclesRepository')
    private vehiclesRepository: IVehiclesRepository
  ) {}

  async execute({ id } : IRequest): Promise<Vehicle>{
    const vehicle = await this.vehiclesRepository.findById(id);

    if(!vehicle){
      throw new AppError('Vehicle not found!', 404);
    }

    return vehicle;
  }
}

export{ GetVehicleUseCase };