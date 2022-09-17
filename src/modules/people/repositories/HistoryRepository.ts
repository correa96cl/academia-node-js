import { History } from "../model/History";
import { ICreateHistoryDTO, IHistoryRepository } from "./IHistoryRepository";

class HistoryRepository implements IHistoryRepository {

    private histories: History[];

    constructor() {
        this.histories = [];
    }
    findByDescription(description: string): History {
        const history = this.histories.find((history) => history.description === description);
        return history;
    }
    create({ description, weight, fat_percentage }: ICreateHistoryDTO): void {
        const history = new History();

        Object.assign(history, {
            description,
            weight,
            fat_percentage,
            created_at: new Date(),
        }

        );

        this.histories.push(history);

    }

}

export { HistoryRepository }