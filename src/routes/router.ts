import express from "express";
import {
    getActivesClass,
    postClass,
    putClassModule,
} from "../controllers/class.controller";
import {
    getStudentsByName,
    postStudent,
} from "../controllers/student.controller";
// import { postProfessor } from "../controllers/professor.controller";

const router = express.Router();

//Class
router.post("/classes", postClass);
router.get("/classes/active", getActivesClass);
router.put("/classes/module", putClassModule);

//Student
router.post("/students", postStudent);
router.get("/students/:name", getStudentsByName);

//Professor
// router.post("/professor", postProfessor);

export default router;
