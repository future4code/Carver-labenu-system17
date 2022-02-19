export default abstract class Person {
    protected id: string;
    protected name: string;
    protected email: string;
    protected birth_date: Date;
    protected class_id: string;
    constructor(
        id: string,
        name: string,
        email: string,
        birth_date: Date,
        class_id: string
    ) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.birth_date = birth_date;
        this.class_id = class_id;
    }
}
