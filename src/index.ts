import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";
import { Session } from "./entity/Session";
import { Role } from "./entity/Role";

createConnection().then(async connection => {
    const role = new Role();
    role.name = "Bot";
    await connection.manager.save(role);

    console.log("Inserting a new user into the database...");
    const user = new User();
    user.fullname = "Timber";
    user.login = "Saw";
    user.nick = "TS";
    user.password = "Some password";
    user.roles = [role];
    await connection.manager.save(user);
    console.log("Saved a new user with id: " + user.id);

    const session = new Session();
    session.user = user;
    session.isActive = true;
    session.isLoggedIn = true;
    session.cookies = "{cookie}";
    session.localStorage = "{localStorage}";
    session.sessionStorage = "{sessionStorage}";
    await connection.manager.save(session);

    console.log("Loading users from the database...");
    const users = await connection.manager.find(User);
    console.log("Loaded users: ", users);
    
    console.log("Loading sessions from the database...");
    const sessions = await connection.manager.find(Session);
    console.log("Loaded sessions: ", sessions);
    
    console.log("Loading session 7 from the database...");
    const sessionOne = await connection.manager.findOne(Session, 7, { relations: ["user"]});
    console.log("Loaded session 7: ", sessionOne);

    console.log("Here you can setup and run express/koa/any other framework.");
    
}).catch(error => console.log(error));
