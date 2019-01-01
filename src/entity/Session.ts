import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn, OneToOne} from "typeorm";
import { ForeignKeyMetadata } from "typeorm/metadata/ForeignKeyMetadata";
import { User } from "./User";

@Entity()
export class Session {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => User)
    @JoinColumn({
        name: "userid"
    })
    user: User;

    @Column()
    isLoggedIn: boolean;

    @Column()
    isActive: boolean;

    @Column()
    cookies: string;

    @Column()
    localStorage: string;

    @Column()
    sessionStorage: string;

}