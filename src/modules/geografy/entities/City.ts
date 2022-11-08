import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("city")
class City {
  @PrimaryColumn()
  id: number;

  @Column()
  description: string;
}

export { City };
