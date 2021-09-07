import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateVehicleUseCase } from "./CreateVehicleUseCase";

class CreateVehicleController {
  async handle(request: Request, response: Response): Promise<Response>{
    const { model, brand, version, year, plate } = request.body;
    const createVehicleUseCase = container.resolve(CreateVehicleUseCase);

    await createVehicleUseCase.execute({
      model,
      brand,
      version,
      year,
      plate
    });

    return response.status(201).send();
  }
}

export { CreateVehicleController };