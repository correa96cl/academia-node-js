import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateHistory1667090468564 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "histories",
        columns: [
          { name: "id", type: "uuid", isPrimary: true },
          { name: "description", type: "varchar" },
          { name: "weight", type: "bigint" },
          { name: "fat_percentage", type: "decimal" },
          { name: "created_at", type: "timestamp", default: "now()" },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("histories");
  }
}
