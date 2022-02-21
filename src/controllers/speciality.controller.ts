import { Request, Response } from "express";
import Speciality from "../models/Speciality";
import SpecialityService from "../services/Specialisty.service";

export const postSpeciality = async (
    request: Request,
    response: Response
): Promise<void> => {
    let erroCode = 400;
    try {
        const { name } = request.body;
        if (!name) {
            throw new Error("name field is missing!");
        }

        const id: string = Speciality.generateId();

        const speciality: Speciality = new Speciality(id, name);
        await SpecialityService.createSpeciality(speciality);

        response
            .status(201)
            .json({ message: "Speciality created sucessfully!" });
    } catch (error: any) {
        response.status(erroCode).json({ error: error.message });
    }
};

export const getProfessorBySpeciality = async (
    req: Request,
    res: Response
): Promise<any | {}> => {
    let errorCode = 500;
    try {
        const { speciality } = req.params;

        if (!speciality) {
            throw new Error("speciality name is missing!");
        }
        const result = await SpecialityService.getProfessorBySpeciality(
            speciality
        );
        res.status(200).json(result);
    } catch (error: any) {
        res.status(errorCode).send({ error: error.message });
    }
};
