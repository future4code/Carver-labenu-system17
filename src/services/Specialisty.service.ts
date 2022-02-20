import ConnectionBase from "../connection/ConnectionBase";

export default class SpecialityService extends ConnectionBase{
    public static async getProfessorBySpeciality(nameSpeciality: string): Promise<any>{
        try {
            const result = await ConnectionBase.connection.raw(`
            SELECT labesystem_professor.name as professor_name, labesystem_speciality.name as speciality_name FROM labesystem_professor_speciality
            INNER JOIN labesystem_professor ON labesystem_professor_speciality.professor_id = labesystem_professor.id
            JOIN labesystem_speciality WHERE labesystem_speciality.name = "${nameSpeciality}";
            `)
            return result[0]
        } catch (error: any) {
            return { error: error.message };
        }
    }
}