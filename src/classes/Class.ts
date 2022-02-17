// Fazer enum do modulo

import { connection } from "../connection";
import { TABLE } from "../constants/tables_names";
import Professor from "./Professor";
import Student from "./Student";

// Fazer classe de estudantes
export default class Class {
    private _id: string;
    private _name: string;
    // private _professors: Professor[];
    // private _students: Student[];
    private _module: number;

    constructor(id: string, name: string, module: number) {
        this._id = id;
        this._name = name;
        this._module = module;
    }

    // Fazer getters e setters
    //Outros métodos da classe turma
}
