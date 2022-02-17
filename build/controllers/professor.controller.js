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
Object.defineProperty(exports, "__esModule", { value: true });
exports.postProfessor = void 0;
const connection_1 = require("../connection");
const uuid_1 = require("uuid");
const postProfessor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let errorCode = 500;
    try {
        const { class_id, name, email, birthDate } = req.body;
        const id = (0, uuid_1.v4)();
        const classId = yield (0, connection_1.connection)()
            .select("id")
            .from("labesystem_class")
            .where("id", "001");
        console.log(classId);
        // const professor: Professor = new Professor(
        //     id,
        //     name,
        //     email,
        //     birthDate,
        //     classId
        // )
        // await connection("labesystem_professor")
        //     .insert(professor)
        res.status(200).end();
    }
    catch (error) {
        res.status(errorCode).send({ error: error.message });
    }
});
exports.postProfessor = postProfessor;
