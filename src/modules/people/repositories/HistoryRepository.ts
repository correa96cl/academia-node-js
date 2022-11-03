import { getRepository, Repository } from "typeorm";

import { History } from "../entities/History";
import { ICreateHistoryDTO, IHistoryRepository } from "./IHistoryRepository";

class HistoryRepository implements IHistoryRepository {
  private repository: Repository<History>;
  constructor() {
    this.repository = getRepository(History);
  }
  async findByDescription(description: string): Promise<History> {
    const history = this.repository.findOne({ description });

    return history;
  }
  async create({
    description,
    weight,
    fat_percentage,
  }: ICreateHistoryDTO): Promise<void> {
    const histories = this.repository.create({
      description,
      weight,
      fat_percentage,
    });

    await this.repository.save(histories);
  }
}

export { HistoryRepository };
