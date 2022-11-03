import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("histories")
class History {
  @PrimaryColumn()
  id?: string;

  @Column()
  description: string;

  @Column()
  weight: number;

  @Column()
  fat_percentage: number;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { History };
