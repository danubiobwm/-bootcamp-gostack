import { Request, Response } from "express";
import createUser from "./service/CreateUser";

export function helloWorld(resquest: Request, response: Response) {
  const user = createUser({
    name: "Danubio",
    email: "d@gmail.com",
    password: "12345",
    techs: ['react', 'node',
      { title: 'Java', experience: 100 }]
  });
  return response.json({ msg: "Hello world" });
}
