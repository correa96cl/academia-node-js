import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUser1665699002532 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
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
            type: "varchar",
          },
          {
            name: "age",
            type: "int",
          },
          {
            name: "height",
            type: "decimal",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}
