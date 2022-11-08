import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("country")
class Country {
  @PrimaryColumn()
  id: number;

  @Column()
  description: string;
}

export { Country };
