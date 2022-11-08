import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCountry1667855814363 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "country",
        columns: [
          { name: "id", type: "int", isPrimary: true },
          {
            name: "description",
            type: "varchar",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("country");
  }
}
