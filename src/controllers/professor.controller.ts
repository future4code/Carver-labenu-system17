import { Request, Response } from "express";
import Professor from "../models/Professor";
import { v4 as uuidv4 } from "uuid";
import { TableName } from "../constants/tables";
import connection from "../data/connection";
import ProfessorService from "../services/Professor.service";

export const postProfessor = async (
    req: Request,
    res: Response
): Promise<void> => {
    let errorCode = 500;
    try {
        const { classId, name, email, birthDate } = req.body;
        const id: string = uuidv4();

        if (!classId || !name || !email || !birthDate) {
            throw new Error("please fill the fields!");
        }

        const checkClassId = await connection()
            .select("id")
            .from(TableName.labesystem_class)
            .where("id", classId);

        const professor: Professor = new Professor(
            id,
            name,
            email,
            birthDate,
            checkClassId[0].id
        );
        await ProfessorService.createProfessor(professor)

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
        const result = await ProfessorService.getProfessors()
        res.status(200).send(result);
    } catch (error: any) {
        res.status(errorCode).send({ error: error.message });
    }

};

export const changeProfessorClass = async (req: Request, res: Response): Promise<any> => {
    let errorCode = 500
    try {
        const professorId = req.params.id as string
        const newClassId = req.body.newClassId as string
        const checkProfessorId = await connection()
            .select("id")
            .from("labesystem_professor")
            .where("id", professorId)

        const result = await connection("labesystem_professor")
            .select("*")

        result.map( async (res: any): Promise<void> => {
            if (checkProfessorId[0].id === res.id) {
                console.log("aaa")
                await connection("labesystem_professor")
                .where("id", checkProfessorId)
                .update({class_id: newClassId})
            }
        })

        result.map( async (res: any): Promise<void> => {
            if (checkProfessorId[0].id === res.id) {
                console.log("aaa")
                await connection("labesystem_professor")
                .where("id", checkProfessorId)
                .update({class_id: newClassId})
            }
        })

        res.status(200).end()
    } catch (error: any) {
        res.status(errorCode).send({ error: error.message })
    }
}