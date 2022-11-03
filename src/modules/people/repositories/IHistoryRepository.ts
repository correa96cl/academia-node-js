import { History } from "../entities/History";

export interface ICreateHistoryDTO {
  description: string;
  weight: number;
  fat_percentage: number;
}

interface IHistoryRepository {
  create({
    description,
    weight,
    fat_percentage,
  }: ICreateHistoryDTO): Promise<void>;
  findByDescription(description: string): Promise<History>;
}

export { IHistoryRepository };
