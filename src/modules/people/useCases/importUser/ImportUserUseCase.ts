import { parse as csvParse } from "csv-parse";
import fs from "fs";
import { inject, injectable } from "tsyringe";

import { IPeopleRepository } from "../../repositories/implemantations/IPeopleRepository";

interface IImportUsers {
  numberDocument: number;
  typeDocument: number;
  name: string;
  lastname: string;
  nationality: number;
  state: number;
  age: number;
  height: number;
}

@injectable()
class ImportUserUseCase {
  constructor(
    @inject("PeopleRepository")
    private userRepository: IPeopleRepository
  ) {}

  loadUsers(file: Express.Multer.File): Promise<IImportUsers[]> {
    return new Promise((resolve, reject) => {
      const users: IImportUsers[] = [];
      const stream = fs.createReadStream(file.path);

      const parseFile = csvParse();

      stream.pipe(parseFile);

      parseFile
        .on("data", async (line) => {
          const [
            numberDocument,
            typeDocument,
            name,
            nationality,
            age,
            state,
            height,
            lastname,
          ] = line;

          users.push({
            numberDocument,
            typeDocument,
            name,
            nationality,
            age,
            state,
            height,
            lastname,
          });
        })
        .on("end", () => {
          fs.promises.unlink(file.path);
          resolve(users);
        })
        .on("error", (err) => {
          reject(err);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const users = await this.loadUsers(file);

    // eslint-disable-next-line array-callback-return
    users.map((user) => {
      const {
        numberDocument,
        typeDocument,
        name,
        nationality,
        state,
        height,
        lastname,
        age,
      } = user;

      const existUser = this.userRepository.findByNumberDocumentTypeDocument(
        numberDocument,
        typeDocument
      );

      if (!existUser) {
        this.userRepository.create({
          numberDocument,
          typeDocument,
          name,
          nationality,
          state,
          lastname,
          age,
          height,
        });
      }
    });
  }
}

export { ImportUserUseCase };
