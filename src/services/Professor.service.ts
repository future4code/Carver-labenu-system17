import ConnectionBase from "../connection/ConnectionBase";
import { TableName } from "../constants/tables";
import Professor from "../models/Professor";

export default class ProfessorService extends ConnectionBase {
    public static async createProfessor(professor: Professor): Promise<void | {}> {
        try {
            const professors: Professor = new Professor(
                professor.getId(),
                professor.getName(),
                professor.getEmail(),
                professor.getBirthDate(),
                professor.getClassId()
            );
            await ConnectionBase.connection(TableName.labesystem_professor).insert(professors);
        } catch (error: any) {
            return { error: error.message };
        }
    }
    public static async getProfessors(): Promise<Professor | {}>{
        try {
            const result = await ConnectionBase.connection(TableName.labesystem_professor).select(
                "*"
            );
            return result
        } catch (error:any) {
            return { error: error.message };
        }
    }
    public static async changeProfessorClass(checkProfessorId: string,newClassId: string): Promise<void | {}>{
        try {
            const result = await ProfessorService.connection(TableName.labesystem_professor)
            .select("*")
            result.map(async (res: any): Promise<void> => {
                if (checkProfessorId === res.id) {
                    console.log("aaa")
                    await ProfessorService.connection.raw(`
                    UPDATE labesystem_professor SET class_id = "${newClassId}" WHERE id = "${checkProfessorId}";
                    `)
                }
            })
        } catch (error: any) {
            return { error: error.message };
        }
    }
}