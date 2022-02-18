import Person from "./Person";

export default class Professor extends Person {
    static getProfessors() {
        throw new Error("Method not implemented.");
    }
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
    public getId(): string{
        return this.id
    }
    public getName(): string{
        return this.name
    }
    public getEmail(): string{
        return this.email
    }
    public getBirthDate(): Date{
        return this.birth_date
    }
    public getClassId(): string{
        return this.class_id
    }
}
