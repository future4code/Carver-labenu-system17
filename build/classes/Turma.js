"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Fazer enum do modulo
// Fazer classe de estudantes
class Turma {
    constructor(id, nome, docentes, estudantes, modulo) {
        this._id = id;
        this._nome = nome;
        this._docentes = docentes;
        this._estudantes = estudantes;
        this._modulo = modulo;
    }
}
exports.default = Turma;
