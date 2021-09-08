import { inject, injectable } from "tsyringe";
import { Vehicle } from "../../entities/Vehicle";
import { IVehiclesRepository } from "../../repositories/IVehiclesRepository";

@injectable()
class ListVehiclesUseCase {
  constructor(
    @inject('VehiclesRepository')
    private veihiclesRepository: IVehiclesRepository
  ) {}

  async execute(): Promise<Vehicle[]> {
    const vehicles = await this.veihiclesRepository.list();
    return vehicles;
  }
}

export { ListVehiclesUseCase }