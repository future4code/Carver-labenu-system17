import Person from "./Person";

export default class Student extends Person {
    constructor(
        id: string,
        name: string,
        email: string,
        birth_date: string,
        class_id: string
    ) {
        super(id, name, email, birth_date, class_id);
    }
}
