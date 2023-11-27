import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Goal {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    type: string

    @Column()
    points: number

}
