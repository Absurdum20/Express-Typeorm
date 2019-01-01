import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

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

}
