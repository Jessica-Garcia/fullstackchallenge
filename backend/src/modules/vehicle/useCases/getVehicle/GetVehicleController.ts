import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetVehicleUseCase } from "./GetVehicleUseCase";

class GetVehicleController {
  async handle(request: Request, response: Response): Promise<Response>{
    const { id } = request.params;
    const getVehicleUseCase = container.resolve(GetVehicleUseCase);
    const vehicle = await getVehicleUseCase.execute({id});
    return response.json(vehicle);
  }
}

export {GetVehicleController};