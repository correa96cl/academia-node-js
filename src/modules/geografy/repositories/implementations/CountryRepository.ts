import { getRepository, Repository } from "typeorm";

import { Country } from "../../entities/Country";
import { ICountryRepository } from "./ICountryRepository";

class CountryRepository implements ICountryRepository {
  private repository: Repository<Country>;

  constructor() {
    this.repository = getRepository(Country);
  }

  async list(): Promise<Country[]> {
    const countries = await this.repository.find();
    return countries;
  }
}

export { CountryRepository };
