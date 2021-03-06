import Class from "../models/Class";
import { Request, Response } from "express";
import ClassService from "../services/Class.service";
import { ModuleValues } from "../constants/module";

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

        const id: string = Class.generateId();

        const class_labenu: Class = new Class(id, name, ModuleValues.module_00);
        await ClassService.createClass(class_labenu);

        response.status(201).json({ message: "Class created sucessfully!" });
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
        let { module, class_id } = request.body;

        if (module === "") {
            throw new Error("module field have a invalid value!");
        }

        if (!class_id || class_id === "") {
            throw new Error("class_id field have a invalid value!");
        }

        module = Number(module);

        if (!module || module < 0 || module > 6) {
            erroCode = 422;
            throw new Error(
                "module field is missing or module have a invalid value!"
            );
        }

        await ClassService.updateClassModule(module, class_id);

        response
            .status(200)
            .json({ message: "Module has updated sucessfully!" });
    } catch (error: any) {
        response.status(erroCode).json({ error: error.message });
    }
};

export const getAllClass = async (
    _: Request,
    response: Response
): Promise<void> => {
    let erroCode = 500;
    try {
        const classes: Class[] | null = await ClassService.getAllClasses();
        if (classes === null) {
            erroCode = 404;
            throw new Error("classes are empty");
        }
        response.status(200).json(classes);
    } catch (error: any) {
        response.status(erroCode).json({ error: error.message });
    }
};
