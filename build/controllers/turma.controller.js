"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postTurma = void 0;
const Turma_1 = __importDefault(require("../classes/Turma"));
const uuid_1 = require("uuid");
const connection_1 = require("../connection");
const tabela = "Turma";
const postTurma = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    let erroCode = 400;
    try {
        const { nome } = request.body;
        if (!nome) {
            throw new Error("nome não inserido!");
        }
        // Fazer consulta dos docentes e validar
        // Fazer consulta dos estudantes e validar
        const id = (0, uuid_1.v4)();
        const turma = new Turma_1.default(id, nome, ["Gui Carvalho", "Amanda"], ["Marcelo Maia", "Leonardo Oliveira"], 0);
        yield (0, connection_1.connection)(tabela).insert(turma);
        response.status(200).json(turma);
    }
    catch (error) {
        response.status(erroCode).json({ error: error.message });
    }
});
exports.postTurma = postTurma;
/* export const getTurmasAtivas = async (): Promise<void> => {}; */
