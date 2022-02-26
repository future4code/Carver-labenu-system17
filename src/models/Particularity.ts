import CommonEntity from "../interfaces/CommonEntinty";

export default abstract class Particularity extends CommonEntity {
    private id: string;
    private name: string;

    constructor(id: string, name: string) {
        super();
        this.id = id;
        this.name = name;
    }

    public getId(): string {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }
}
