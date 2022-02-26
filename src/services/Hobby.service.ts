import ConnectionBase from "../connection/ConnectionBase";
import { TableName } from "../constants/tables";
import Hobby from "../models/Hobby";
import StudentHobby from "../models/StudentHobby";

export default class HobbyService extends ConnectionBase {
    public static async createHobby(hobby: Hobby): Promise<void | {}> {
        try {
            await ConnectionBase.connection(TableName.labesystem_hobby).insert({
                id: hobby.getId(),
                name: hobby.getName(),
            });
        } catch (error: any) {
            return { error: error.message };
        }
    }

    public static async createStudentRelationHobby(
        student_hobby: StudentHobby
    ): Promise<void | {}> {
        try {
            await HobbyService.connection(
                TableName.labesystem_student_hobby
            ).insert({
                id: student_hobby.getId(),
                student_id: student_hobby.getStudentId(),
                hobby_id: student_hobby.getHobbyId(),
            });
        } catch (error: any) {
            return { error: error.message };
        }
    }
}
