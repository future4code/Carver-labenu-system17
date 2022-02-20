import { Request, Response } from "express";
import Person from "../models/Person";
import StudentProfessorService from "../services/Student.Professor.service";


export const getStudentsAndProfessorsByClass = async (req: Request, res: Response): Promise<any | {}> =>{
    let errorCode = 500;
    try {
        const classId = req.query.classId as string
        if(!classId){throw new Error("class Id is missing!")}
        const result = await StudentProfessorService.getStudentAndProfessorByClassId(classId)
        console.log(result)
        res.status(200).send(result)
    } catch (error: any) {
        res.status(errorCode).send({ error: error.message });
    }
}