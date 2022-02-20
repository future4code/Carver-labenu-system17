import Student from "../models/Student";
import { Request, Response } from "express";
import StudentService from "../services/Student.service";
import Person from "../models/Person";
import ClassService from "../services/Class.service";

export const postStudent = async (
    request: Request,
    response: Response
): Promise<void> => {
    let errorCode = 400;
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

        const id: string = Person.generateId();

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
        response.status(errorCode).json({ error: error.message });
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

export const changeStudentClass = async (
    req: Request,
    res: Response
): Promise<any> => {
    let errorCode = 500;
    try {
        const studentId = req.params.id as string;
        const newClassId = req.body.newClassId as string;

        const checkStudentId = await StudentService.checkStudentId(studentId);
        const checkClassId = await ClassService.checkClassId(newClassId);

        if (studentId === "" || !studentId) {
            throw new Error("Id params is missing!");
        }
        if (!newClassId || newClassId === "") {
            throw new Error("classID is missing!");
        }
        if (checkClassId === null) {
            errorCode = 404;
            throw new Error("class ID not found!");
        }

        await StudentService.changeStudentClass(checkStudentId, newClassId);

        res.status(200).json({
            message: "Student class has been changed sucessfully!",
        });
    } catch (error: any) {
        res.status(errorCode).send({ error: error.message });
    }
};
