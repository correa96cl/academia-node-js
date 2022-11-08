import { Country } from "../../entities/Country";

interface ICountryRepository {
  list(): Promise<Country[]>;
}

export { ICountryRepository };
