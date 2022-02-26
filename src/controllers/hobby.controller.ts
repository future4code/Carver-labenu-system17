import { Request, Response } from "express";
import Hobby from "../models/Hobby";
import HobbyService from "../services/Hobby.service";

export const postHobby = async (
    request: Request,
    response: Response
): Promise<void> => {
    let erroCode = 400;
    try {
        const { name } = request.body;
        if (!name) {
            throw new Error("name field is missing!");
        }

        const id: string = Hobby.generateId();

        const hobby: Hobby = new Hobby(id, name);
        await HobbyService.createHobby(hobby);

        response.status(201).json({ message: "Hobby created sucessfully!" });
    } catch (error: any) {
        response.status(erroCode).json({ error: error.message });
    }
};
