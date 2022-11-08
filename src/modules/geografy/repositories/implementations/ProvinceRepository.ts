import { Repository, getRepository } from "typeorm";

import { Province } from "../../entities/Province";
import { IProvinceRepository } from "./IProvinceRepository";

class ProvinceRepository implements IProvinceRepository {
  private repository: Repository<Province>;

  constructor() {
    this.repository = getRepository(Province);
  }
  async list(): Promise<Province[]> {
    const countries = await this.repository.find();
    return countries;
  }
}

export { ProvinceRepository };
