import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { IVehiclesRepository } from "../../repositories/IVehiclesRepository";

interface IRequest{
  id: string;
}

@injectable()
class DeleteVehicleUseCase {
  constructor(
    @inject('VehiclesRepository')
    private vehiclesRepository: IVehiclesRepository
  ) {}

  async execute({ id }: IRequest): Promise<void>{
    const vehicle = await this.vehiclesRepository.findById(id);
    
    if(!vehicle){
      throw new AppError('Vehicle not found!', 404); 
    }

    const deletedVehicle = await this.vehiclesRepository.delete(id);

    if(deletedVehicle.affected < 1){
      throw new AppError('An Error has ocurred! Try again');
    }
  }
}

export { DeleteVehicleUseCase };