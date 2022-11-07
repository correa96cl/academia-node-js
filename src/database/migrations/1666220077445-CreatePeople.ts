import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePeople1665699002532 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "people",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "typeDocument",
            type: "int",
          },
          {
            name: "numberDocument",
            type: "bigint",
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "lastname",
            type: "varchar",
          },
          {
            name: "nationality",
            type: "int",
          },
          {
            name: "age",
            type: "int",
          },
          {
            name: "height",
            type: "decimal",
            isNullable: true,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "state",
            type: "int",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("people");
  }
}
