import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { IRegisterVehicleDTO } from "../../dtos/IRegisterVehicleDTO";
import { IVehiclesRepository } from "../../repositories/IVehiclesRepository";

@injectable()
class CreateVehicleUseCase {

  constructor(
    @inject('VehiclesRepository')
    private vehiclesRepository: IVehiclesRepository
  ) {}

  async execute({
    plate, 
    brand, 
    version, 
    model, 
    year
  }: IRegisterVehicleDTO): Promise<void> {
    const vehicleAlreadyRegistered = await this.vehiclesRepository.findByPlate(plate);

    if(vehicleAlreadyRegistered){
      throw new AppError('Vehicle already registered!');
    }

    await this.vehiclesRepository.create({
      plate, 
      brand, 
      version, 
      model, 
      year
    });
  }
}

export { CreateVehicleUseCase };