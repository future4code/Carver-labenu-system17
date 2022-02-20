import ConnectionBase from "../connection/ConnectionBase";

export default class StudentProfessorService extends ConnectionBase{
    public static async getStudentAndProfessorByClassId(id: string): Promise<[] | {}>{
        try {
            const resultProfessor = await ConnectionBase.connection.raw(`
                SELECT class.id as class_id, prof.id as prof_id, prof.name as professor_name FROM labesystem_class class
                INNER JOIN labesystem_professor prof ON prof.class_id = class.id
                WHERE class.id = "${id}";
            `)

            const resultStudent = await ConnectionBase.connection.raw(`
                SELECT class.id as class_id, stud.id as stud_id, stud.name as student_name FROM labesystem_class class
                INNER JOIN labesystem_student stud ON stud.class_id = class.id
                WHERE class.id = "${id}";
            `)

            const result = [
                {professors: resultProfessor[0]},
                {students: resultStudent[0]}
            ]
            return result
        } catch (error: any) {
            return { error: error.message };
        }
    }
}