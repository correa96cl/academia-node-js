import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("people")
class Person {
  @PrimaryColumn()
  id?: string;

  @Column()
  numberDocument: number;

  @Column()
  typeDocument?: number;

  @Column()
  name: string;

  @Column()
  lastname?: string;

  @Column()
  nationality?: number;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  @Column()
  state: number;

  @Column()
  height: number;

  @Column()
  age?: number;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Person };
