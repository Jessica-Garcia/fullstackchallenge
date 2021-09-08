import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateVehicleUseCase } from "./UpdateVehicleUseCase";

class UpdateVehicleController {
  async handle(request: Request, response: Response): Promise<Response>{
    const { id } = request.params;
    const newVehicle = request.body;
    const updateVehicleUseCase = container.resolve(UpdateVehicleUseCase);
    const updatedVehicle = await updateVehicleUseCase.execute({id}, newVehicle);
    return response.json(updatedVehicle);
  }
}

export { UpdateVehicleController };