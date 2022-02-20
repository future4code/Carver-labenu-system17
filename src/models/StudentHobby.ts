import PersonParticularity from "./PersonParticularity";

export default class StudentHobby extends PersonParticularity {
    private student_id: string;
    private hobby_id: string;

    constructor(id: string, student_id: string, hobby_id: string) {
        super(id);
        this.student_id = student_id;
        this.hobby_id = hobby_id;
    }

    public getStudentId(): string {
        return this.student_id;
    }

    public getHobbyId(): string {
        return this.hobby_id;
    }
}
