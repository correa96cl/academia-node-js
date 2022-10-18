import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUser1665699002532 implements MigrationInterface {
  // eslint-disable-next-line class-methods-use-this
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
            type: "number",
          },
          {
            name: "numberDocument",
            type: "number",
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
            type: "number",
          },
          {
            name: "height",
            type: "number",
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

  // eslint-disable-next-line class-methods-use-this
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}
