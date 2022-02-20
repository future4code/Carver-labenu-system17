import express from "express";
import {
    getActivesClass,
    postClass,
    putClassModule,
} from "../controllers/class.controller";
import { postHobby } from "../controllers/hobby.controller";
import {
    changeProfessorClass,
    getProfessors,
    postProfessor,
} from "../controllers/professor.controller";
import {
    getProfessorBySpeciality,
    postSpeciality,
} from "../controllers/speciality.controller";
import {
    changeStudentClass,
    getStudentsByName,
    postStudent,
} from "../controllers/student.controller";
import {
    getStudentsAndProfessorsByClass,
    postStudentOrProfessorParticularity,
} from "../controllers/student.professor.controller";

const router = express.Router();

//Class
router.post("/classes", postClass);
router.get("/classes/active", getActivesClass);
router.put("/classes/module", putClassModule);

//Student
router.post("/students", postStudent);
router.get("/students/:name", getStudentsByName);
router.put("/students/:id", changeStudentClass);

//Professor
router.post("/professors", postProfessor);
router.get("/professors", getProfessors);
router.put("/professors/:id", changeProfessorClass);

//Student/Professor
router.get("/classPersons", getStudentsAndProfessorsByClass);
router.post("/person/particularity", postStudentOrProfessorParticularity);

//Speciality
router.get("/specialities", getProfessorBySpeciality);
router.post("/specialities", postSpeciality);

//Hobby
router.post("/hobbies", postHobby);

export default router;
