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
  execute({ description, weight, fat_percentage }: IRequest): void {
    const historyAlreadyExists =
      this.historiesReposiutory.findByDescription(description);

    if (historyAlreadyExists) {
      this.historiesReposiutory.create({ description, weight, fat_percentage });
    }
  }
}

export { CreateHistoryUseCase };
