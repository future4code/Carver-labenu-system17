import express from "express";
import {
    getActivesClass,
    postClass,
    putClassModule,
} from "../controllers/class.controller";
import {
    changeProfessorClass,
    getProfessors,
    postProfessor,
} from "../controllers/professor.controller";
import { getProfessorBySpeciality } from "../controllers/speciality.controller";
import {
    getStudentsByName,
    postStudent,
} from "../controllers/student.controller";
import { getStudentsAndProfessorsByClass } from "../controllers/student.professor.controller";

const router = express.Router();

//Class
router.post("/classes", postClass);
router.get("/classes/active", getActivesClass);
router.put("/classes/module", putClassModule);

//Student
router.post("/students", postStudent);
router.get("/students/:name", getStudentsByName);

//Professor
router.post("/professor", postProfessor);
router.get("/professors", getProfessors);
router.put("/professors/:id", changeProfessorClass);

//get Students and Professors by class id
router.get("/classPersons", getStudentsAndProfessorsByClass)

//Speciality
router.get("/speciality", getProfessorBySpeciality)
export default router;
