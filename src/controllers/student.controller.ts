import Student from "../models/Student";
import { v4 as uuidv4 } from "uuid";
import { Request, Response } from "express";
import StudentService from "../services/Student.service";
import Person from "../models/Person";

export const postStudent = async (
    request: Request,
    response: Response
): Promise<void> => {
    let erroCode = 400;
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
            throw new Error(
                "birth_date have a invalid value date for: YYYY-MM-DD!"
            );
        }
        if (!class_id || class_id === "") {
            throw new Error("class_id field is missing!");
        }

        const id: string = uuidv4();

        const student: Student = new Student(
            id,
            name,
            email,
            birth_date,
            class_id
        );
        await StudentService.createStudent(student);

        response.status(201).json({ message: "Student created sucessfully!" });
    } catch (error: any) {
        response.status(erroCode).json({ error: error.message });
    }
};

export const getStudentsByName = async (
    request: Request,
    response: Response
): Promise<void> => {
    let erroCode = 400;
    try {
        const { name } = request.params;

        if (!name || name === "") {
            throw new Error("name field is missing!");
        }
        const studentsByName: Student[] =
            await StudentService.indexStudentByName(name);

        if (studentsByName.length === 0) {
            erroCode = 404;
            throw new Error("students not found");
        }

        response.status(200).json(studentsByName);
    } catch (error: any) {
        response.status(erroCode).json({ error: error.message });
    }
};
