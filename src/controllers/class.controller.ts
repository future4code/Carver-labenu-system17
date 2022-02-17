import Class from "../classes/Class";
import { v4 as uuidv4 } from "uuid";
import { Request, Response } from "express";
import { connection } from "../connection";

// const tabela = "Turma";

export const postClass = async (
    request: Request,
    response: Response
): Promise<void> => {
    let erroCode = 400;
    try {
        const { nome } = request.body;
        if (!nome) {
            throw new Error("nome não inserido!");
        }
        // Fazer consulta dos docentes e validar
        // Fazer consulta dos estudantes e validar

        const id: string = uuidv4();

        const turma: Class = new Class(id, nome, 0);

        await connection(tabela).insert(turma);

        response.status(200).json(turma);
    } catch (error: any) {
        response.status(erroCode).json({ error: error.message });
    }
};

/* export const getTurmasAtivas = async (): Promise<void> => {}; */
