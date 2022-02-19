// import Professor from "./Professor";
// import Student from "./Student";

import { ModuleValues } from "../constants/module";

export default class Class {
    private id: string;
    private name: string;
    //private professors: Professor[];
    // private students: Student[];
    private module: ModuleValues;

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
    public getModule(): ModuleValues {
        return this.module;
    }
}
