import { inject, injectable } from "tsyringe";

import { IHistoryRepository } from "../../repositories/IHistoryRepository";

interface IRequest {
  description: string;
  weight: number;
  fat_percentage: number;
}

@injectable()
class CreateHistoryUseCase {
  constructor(
    @inject("HistoryRepository")
    private historiesReposiutory: IHistoryRepository
  ) {}
  async execute({
    description,
    weight,
    fat_percentage,
  }: IRequest): Promise<void> {
    const historyAlreadyExists =
      await this.historiesReposiutory.findByDescription(description);

    if (historyAlreadyExists) {
      this.historiesReposiutory.create({ description, weight, fat_percentage });
    }
  }
}

export { CreateHistoryUseCase };
