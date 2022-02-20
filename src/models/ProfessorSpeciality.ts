import PersonParticularity from "./PersonParticularity";

export default class ProfessorSpeciality extends PersonParticularity {
    private professor_id: string;
    private speciality_id: string;

    constructor(id: string, professor_id: string, speciality_id: string) {
        super(id);
        this.professor_id = professor_id;
        this.speciality_id = speciality_id;
    }

    public getProfessorId(): string {
        return this.professor_id;
    }

    public getSpecialityId(): string {
        return this.speciality_id;
    }
}
