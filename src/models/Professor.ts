import Person from "./Person";

export default class Professor extends Person {
    constructor(
        id: string,
        name: string,
        email: string,
        birth_date: string,
        class_id: string
    ) {
        super(id, name, email, birth_date, class_id);
    }
    public getId(): string {
        return this.id;
    }
    public getName(): string {
        return this.name;
    }
    public getEmail(): string {
        return this.email;
    }
    public getBirthDate(): string{
        return this.birth_date
    }
    public getClassId(): string {
        return this.class_id;
    }
}
