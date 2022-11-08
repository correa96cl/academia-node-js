import { Province } from "../../entities/Province";

interface IProvinceRepository {
  list(): Promise<Province[]>;
}

export { IProvinceRepository };
