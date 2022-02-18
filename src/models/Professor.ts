import Person from "./Person";

export default class Professor extends Person {
    constructor(
        id: string,
        name: string,
        email: string,
        birth_date: Date,
        class_id: string
    ) {
        super(id, name, email, birth_date, class_id);
    }
    // Fazer getters e setters
    //Outros métodos da classe turma
}
