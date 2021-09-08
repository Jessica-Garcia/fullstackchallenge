import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListVehiclesUseCase } from "./ListVehiclesUseCase";

class ListVehiclesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listVehiclesUseCase = container.resolve(ListVehiclesUseCase);
    const vehicles = await listVehiclesUseCase.execute();
    return response.json(vehicles);
  }
}

export { ListVehiclesController };