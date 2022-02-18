export default abstract class Person {
    private id: string;
    private name: string;
    private email: string;
    private birth_date: Date;
    private class_id: string;
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
