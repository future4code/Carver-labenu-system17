import ConnectionBase from "../connection/ConnectionBase";
import { TableName } from "../constants/tables";
import ProfessorSpeciality from "../models/ProfessorSpeciality";
import Speciality from "../models/Speciality";

export default class SpecialityService extends ConnectionBase {
    public static async createSpeciality(
        speciality: Speciality
    ): Promise<void | {}> {
        try {
            await SpecialityService.connection(
                TableName.labesystem_speciality
            ).insert({
                id: speciality.getId(),
                name: speciality.getName(),
            });
        } catch (error: any) {
            return { error: error.message };
        }
    }

    public static async getProfessorBySpeciality(
        nameSpeciality: string
    ): Promise<any> {
        try {
            const result = await ConnectionBase.connection.raw(`
            SELECT labesystem_professor.name as professor_name, labesystem_speciality.name as speciality_name FROM labesystem_professor_speciality
            INNER JOIN labesystem_professor ON labesystem_professor_speciality.professor_id = labesystem_professor.id
            JOIN labesystem_speciality WHERE labesystem_speciality.name = "${nameSpeciality}";
            `);
            return result[0];
        } catch (error: any) {
            return { error: error.message };
        }
    }

    public static async createProfessorRelationSpeciality(
        professor_speciality: ProfessorSpeciality
    ): Promise<void | {}> {
        try {
            await SpecialityService.connection.raw(
                `INSERT INTO ${
                    TableName.labesystem_student_hobby
                } (id, professor_id, speciality_id) VALUES(
                    ${professor_speciality.getId()},
                    ${professor_speciality.getProfessorId()},
                    ${professor_speciality.getSpecialityId()}
                )`
            );
        } catch (error: any) {
            return { error: error.message };
        }
    }
}
