import express from "express";
import { getActivesClass, postClass } from "../controllers/class.controller";
import { postProfessor } from "../controllers/professor.controller";

const router = express.Router();

//Turma
router.post("/class", postClass);
router.get("/class/active", getActivesClass);

//Professor
router.post("/professor", postProfessor);

export default router;
