import express from "express";
import { postTurma } from "../controllers/turma.controller";

const router = express.Router();

//Turma
router.post("/turma", postTurma);

export default router;
