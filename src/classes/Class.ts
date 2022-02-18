// Fazer enum do modulo

import Professor from "./Professor";
import Student from "./Student";

// Fazer classe de estudantes
export default class Class {
    private id: string;
    private name: string;
    //private professors: Professor[];
    // private students: Student[];
    private module: number;

    constructor(id: string, name: string, module: number) {
        this.id = id;
        this.name = name;
        this.module = module;
    }

    // Fazer getters e setters
    //Outros métodos da classe turma
}
