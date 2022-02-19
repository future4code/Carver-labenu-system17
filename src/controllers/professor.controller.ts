import { Request, Response } from "express";
import Professor from "../models/Professor";
import { v4 as uuidv4 } from "uuid";
import ProfessorService from "../services/Professor.service";
import ClassService from "../services/Class.service";
import Person from "../models/Person";

export const postProfessor = async (
    req: Request,
    res: Response
): Promise<void> => {
    let errorCode = 500;
    try {
        const { classId, name, email, birthDate } = req.body;

        if (!classId || !name || !email || !birthDate) {
            throw new Error("please fill the fields!");
        }

        if (!Person.isValidDate(birthDate)) {
            errorCode = 422;
            throw new Error(
                "birth_date have a invalid value date for: YYYY-MM-DD!"
            );
        }

        const checkClassId = await ProfessorService.checkProfessorId(classId);

        const id: string = Person.generateId();

        const professor: Professor = new Professor(
            id,
            name,
            email,
            birthDate,
            checkClassId
        );
        await ProfessorService.createProfessor(professor);

        res.status(201).json({ message: "Professor created sucessfully!" });
    } catch (error: any) {
        res.status(errorCode).send({ error: error.message });
    }
};

export const getProfessors = async (
    req: Request,
    res: Response
): Promise<any> => {
    let errorCode = 500;
    try {
        const result = await ProfessorService.getProfessors();
        res.status(200).send(result);
    } catch (error: any) {
        res.status(errorCode).send({ error: error.message });
    }
};

export const changeProfessorClass = async (
    req: Request,
    res: Response
): Promise<any> => {
    let errorCode = 500;
    try {
        const professorId = req.params.id as string;
        const newClassId = req.body.newClassId as string;

        const checkProfessorId = await ProfessorService.checkProfessorId(
            professorId
        );
        const checkClassId = await ClassService.checkClassId(newClassId);

        if (professorId === "") {
            throw new Error("Id params is missing!");
        }
        if (!newClassId) {
            throw new Error("classID is missing!");
        }
        if (checkClassId === null) {
            throw new Error("class ID not found!");
        }

        await ProfessorService.changeProfessorClass(
            checkProfessorId,
            newClassId
        );

        res.status(200).json({
            message: "Professor changed class id sucessfully!",
        });
    } catch (error: any) {
        res.status(errorCode).send({ error: error.message });
    }
};
