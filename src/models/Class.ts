// Fazer enum do modulo

import { TableName } from "../constants/tables";
import Professor from "./Professor";
import Student from "./Student";

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

    public getName(): string {
        return this.name;
    }
    public getId(): string {
        return this.id;
    }
    public getModule(): number {
        return this.module;
    }
}
