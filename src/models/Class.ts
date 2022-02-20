import { v4 as uuidv4 } from "uuid";
import { ModuleValues } from "../constants/module";

export default class Class implements IEntity {
    private id: string;
    private name: string;
    private module: ModuleValues;

    constructor(id: string, name: string, module: number) {
        this.id = id;
        this.name = name;
        this.module = module;
    }
    generateId(): string {
        throw new Error("Method not implemented.");
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

    public static generateId(): string {
        return uuidv4();
    }
}
