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
import {
    getStudentsByName,
    postStudent,
} from "../controllers/student.controller";

const router = express.Router();

//Class
router.post("/classes", postClass);
router.get("/classes/active", getActivesClass);
router.put("/classes/module", putClassModule);

//Student
router.post("/students", postStudent);
router.get("/students/:name", getStudentsByName);

//Professor
router.post("/professors", postProfessor);
router.get("/professors", getProfessors);
router.put("/professors/:id", changeProfessorClass);

export default router;
