import { Request, Response } from "express";
import Professor from "../models/Professor";
import ProfessorService from "../services/Professor.service";
import ClassService from "../services/Class.service";
import Person from "../models/Person";

export const postProfessor = async (
    request: Request,
    response: Response
): Promise<void> => {
    let errorCode = 500;
    try {
        const { name, email, birth_date, class_id } = request.body;

        if (!name || name === "") {
            throw new Error("name field is missing!");
        }
        if (!email || email === "") {
            throw new Error("email field is missing!");
        }
        if (!birth_date || birth_date === "") {
            throw new Error("birth_date field is missing!");
        }
        if (!Person.isValidDate(birth_date)) {
            errorCode = 422;
            throw new Error(
                "birth_date have a invalid value date for: YYYY-MM-DD!"
            );
        }
        if (!class_id || class_id === "") {
            throw new Error("class_id field is missing!");
        }

        const checkClassId = await ClassService.checkClassId(class_id);

        if (!checkClassId) {
            errorCode = 404;
            throw new Error("class does not exist!");
        }

        const id: string = Person.generateId();

        const professor: Professor = new Professor(
            id,
            name,
            email,
            birth_date,
            checkClassId
        );

        console.log(professor);
        await ProfessorService.createProfessor(professor);

        response
            .status(201)
            .json({ message: "Professor created sucessfully!" });
    } catch (error: any) {
        response.status(errorCode).send({ error: error.message });
    }
};

export const getProfessors = async (
    _: Request,
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
