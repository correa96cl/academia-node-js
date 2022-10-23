import { parse as csvParse } from "csv-parse";
import fs from "fs";

import { IUsersRepository } from "../../repositories/implemantations/IUsersRepository";

interface IImportUsers {
  numberDocument: number;
  typeDocument: number;
  name: string;
}

class ImportUserUseCase {
  constructor(private userRepository: IUsersRepository) {}

  loadUsers(file: Express.Multer.File): Promise<IImportUsers[]> {
    return new Promise((resolve, reject) => {
      const users: IImportUsers[] = [];
      const stream = fs.createReadStream(file.path);

      const parseFile = csvParse();

      stream.pipe(parseFile);

      parseFile
        .on("data", async (line) => {
          const [numberDocument, typeDocument, name] = line;

          users.push({ numberDocument, typeDocument, name });
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

    users.map((user) => {
      const { numberDocument, typeDocument, name } = user;

      const existUser = this.userRepository.findByNumberDocumentTypeDocument(
        numberDocument,
        typeDocument
      );

      if (!existUser) {
        this.userRepository.create({
          numberDocument,
          typeDocument,
          name,
        });
      }
    });
  }
}

export { ImportUserUseCase };
