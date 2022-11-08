import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProvince1667857112344 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "province",
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
