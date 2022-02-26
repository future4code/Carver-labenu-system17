import CommonEntity from "../interfaces/CommonEntinty";

export default abstract class PersonParticularity extends CommonEntity {
    private id: string;
    constructor(id: string) {
        super();
        this.id = id;
    }

    public getId(): string {
        return this.id;
    }
}
