import Class from "../models/Class";
import { v4 as uuidv4 } from "uuid";
import { Request, Response } from "express";
import ClassService from "../services/Class.service";

export const postClass = async (
    request: Request,
    response: Response
): Promise<void> => {
    let erroCode = 400;
    try {
        const { name } = request.body;
        if (!name) {
            throw new Error("name field is missing!");
        }

        const id: string = uuidv4();

        const class_labenu: Class = new Class(id, name, 0);
        await ClassService.createClass(class_labenu);

        response.status(200).json({ message: "Class created sucessfully!" });
    } catch (error: any) {
        response.status(erroCode).json({ error: error.message });
    }
};

export const getActivesClass = async (
    _: Request,
    response: Response
): Promise<void> => {
    let erroCode = 500;
    try {
        const activeClass: Class[] = await ClassService.getActiveClass();
        response.status(200).json(activeClass);
    } catch (error: any) {
        response.status(erroCode).json({ error: error.message });
    }
};
