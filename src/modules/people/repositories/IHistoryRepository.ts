import { History } from "../entities/History";

export interface ICreateHistoryDTO {
  description: string;
  weight: number;
  fat_percentage: number;
}

interface IHistoryRepository {
  create({ description, weight, fat_percentage }: ICreateHistoryDTO): void;
  findByDescription(description: string): History;
}

export { IHistoryRepository };
