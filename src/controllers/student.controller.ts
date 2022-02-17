import Student from "../classes/Student";
import { v4 as uuidv4 } from "uuid";
import { Request, Response } from "express";
import { connection } from "../connection";

// const tableName = "Student";

const postStudent = async (
    request: Request,
    response: Response
): Promise<void> => {
    try {
        const { name, email, birth_date, class_id } = request.body;
        //const class: Turma = connection.
    } catch (error) {}
};
