"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Professor {
    constructor(id, name, email, birth_date, class_id) {
        this._id = id;
        this._name = name;
        this._email = email;
        this._birth_date = birth_date;
        this._class_id = class_id;
    }
    // Fazer getters e setters
    //Outros métodos da classe turma
    getProfessor(id) {
        if (this._id === id) {
            return this._name;
        }
    }
}
exports.default = Professor;
