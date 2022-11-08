import { getRepository, Repository } from "typeorm";

import { City } from "../../entities/City";
import { ICityRepository } from "./ICityRepository";

class CityRepository implements ICityRepository {
  private repository: Repository<City>;

  constructor() {
    this.repository = getRepository(City);
  }

  async list(): Promise<City[]> {
    const cities = await this.repository.find();
    return cities;
  }
}

export { CityRepository };
