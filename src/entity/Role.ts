import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from "typeorm";
import {User} from "./User";

@Entity()
export class Role {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany(type => User, metadata => metadata.roles, {
        cascade: false
    })
    @JoinTable()
    users: User[];

}
