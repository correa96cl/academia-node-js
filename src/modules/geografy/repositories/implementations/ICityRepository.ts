import { City } from "../../entities/City";

interface ICityRepository {
  list(): Promise<City[]>;
}

export { ICityRepository };
