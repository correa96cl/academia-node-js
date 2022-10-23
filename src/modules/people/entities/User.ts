import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("users")
class User {
  @PrimaryColumn()
  id?: string;

  @Column("numberDocument")
  numberDocument: number;

  @Column("typeDocument")
  typeDocument?: number;

  @Column("name")
  name: string;

  @Column("last_name")
  last_name?: string;

  @Column("nationality")
  nationality?: number;

  @CreateDateColumn()
  created_at: Date;

  @Column("updated_at")
  updated_at: Date;

  @Column("state")
  state: number;

  @Column("height")
  height: number;

  @Column("age")
  age?: number;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { User };
