import { Request, Response } from "express";
import Particularity from "../models/Particularity";
import ProfessorSpeciality from "../models/ProfessorSpeciality";
import StudentHobby from "../models/StudentHobby";
import HobbyService from "../services/Hobby.service";
import SpecialityService from "../services/Specialisty.service";
import StudentProfessorService from "../services/Student.Professor.service";

export const getStudentsAndProfessorsByClass = async (
    req: Request,
    res: Response
): Promise<any | {}> => {
    let errorCode = 500;
    try {
        const classId = req.query.classId as string;
        if (!classId) {
            throw new Error("class Id is missing!");
        }
        const result =
            await StudentProfessorService.getStudentAndProfessorByClassId(
                classId
            );
        res.status(200).send(result);
    } catch (error: any) {
        res.status(errorCode).send({ error: error.message });
    }
};

export const postStudentOrProfessorParticularity = async (
    request: Request,
    response: Response
): Promise<void> => {
    let erroCode = 400;
    try {
        const { person_id, particularity_id, type_particularity } =
            request.body;
        if (!person_id || person_id === "") {
            throw new Error("person field is missing!");
        }

        if (!particularity_id || particularity_id === "") {
            throw new Error("particularity_id field is missing!");
        }

        const id: string = Particularity.generateId();
        let particularity: StudentHobby | ProfessorSpeciality;
        let type_person: string;

        if (type_particularity === "hobby") {
            type_person = "Student";
            particularity = new StudentHobby(id, person_id, particularity_id);
            await HobbyService.createStudentRelationHobby(particularity);
        } else if (type_particularity === "speciality") {
            type_person = "Professor";
            particularity = new ProfessorSpeciality(
                id,
                person_id,
                particularity_id
            );
            await SpecialityService.createProfessorRelationSpeciality(
                particularity
            );
        } else {
            erroCode = 422;
            throw new Error(
                `type_particularity: ${type_particularity} is not valid!`
            );
        }

        response.status(201).json({
            message: `Particularity for: ${type_person} has been created with: ${type_particularity}!`,
        });
    } catch (error: any) {
        response.status(erroCode).json({ error: error.message });
    }
};
