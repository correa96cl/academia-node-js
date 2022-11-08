import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("province")
class Province {
  @PrimaryColumn()
  id: number;

  @Column()
  description: string;
}

export { Province };
