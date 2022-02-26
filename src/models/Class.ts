import { ModuleValues } from "../constants/module";
import CommonEntity from "../interfaces/CommonEntinty";

export default class Class extends CommonEntity {
    private id: string;
    private name: string;
    private module: ModuleValues;

    constructor(id: string, name: string, module: number) {
        super();
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
}
