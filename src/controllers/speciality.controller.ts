import { Request, Response } from "express";
import SpecialityService from "../services/Specialisty.service";

export const getProfessorBySpeciality = async (req: Request, res: Response): Promise<any | {}> => {
    let errorCode = 500;
    try {
        const speciality = req.query.q as string
        if(!speciality){throw new Error("speciality name is missing!")}
        const result = await SpecialityService.getProfessorBySpeciality(speciality)
        res.status(200).json(result)
    } catch (error: any) {
        res.status(errorCode).send({ error: error.message });
    }
}