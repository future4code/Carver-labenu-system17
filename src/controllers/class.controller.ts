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
        if (activeClass.length === 0) {
            erroCode = 404;
            throw new Error("activeClass not found");
        }
        response.status(200).json(activeClass);
    } catch (error: any) {
        response.status(erroCode).json({ error: error.message });
    }
};

export const putClassModule = async (
    request: Request,
    response: Response
): Promise<void> => {
    let erroCode = 400;
    try {
        let module = request.body.module;

        if (module === "") {
            throw new Error("module field have a invalid value!");
        }

        module = Number(module);

        if (!module || module < 0 || module > 6) {
            erroCode = 422;
            throw new Error(
                "module field is missing or module have a invalid value!"
            );
        }

        await ClassService.updateClassModule(module);

        response
            .status(200)
            .json({ message: "Module has updated sucessfully!" });
    } catch (error: any) {
        response.status(erroCode).json({ error: error.message });
    }
};
