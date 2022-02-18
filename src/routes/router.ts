import express from "express";
import { postClass } from "../controllers/class.controller";

const router = express.Router();

//Turma
router.post("/turma", postClass);

export default router;
