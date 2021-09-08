import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteVehicleUseCase } from "./DeleteVehicleUseCase";

class DeleteVehicleController {
  async handle(request: Request, response: Response): Promise<Response>{
    const { id } = request.params;

    const deleteVehicleUseCase = container.resolve(DeleteVehicleUseCase);

    await deleteVehicleUseCase.execute({id});

    return response.json({message: 'Vehicle was deleted!'});
  };
};

export { DeleteVehicleController };