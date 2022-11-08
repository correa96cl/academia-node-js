import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCity1667857164519 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "city",
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
    await queryRunner.dropTable("province");
  }
}
