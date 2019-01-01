import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, Table, JoinTable} from "typeorm";
import { Role } from "./Role";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fullname: string;

    @Column()
    login: string;

    @Column()
    password: string;

    @Column()
    nick: string;

    @ManyToMany(type => Role)
    @JoinTable()
    roles: Role[];

}
