import ConnectionBase from "../connection/ConnectionBase";
import { TableName } from "../constants/tables";
import Hobby from "../models/Hobby";
import StudentHobby from "../models/StudentHobby";

export default class HobbyService extends ConnectionBase {
    public static async createHobby(hobby: Hobby): Promise<void | {}> {
        try {
            await HobbyService.connection.raw(
                `INSERT INTO ${TableName.labesystem_hobby} (id, name) VALUES(
                    ${hobby.getId()},
                    ${hobby.getName()},
                )`
            );
        } catch (error: any) {
            return { error: error.message };
        }
    }

    public static async createStudentRelationHobby(
        student_hobby: StudentHobby
    ): Promise<void | {}> {
        try {
            await HobbyService.connection.raw(
                `INSERT INTO ${
                    TableName.labesystem_student_hobby
                } (id, student_id, hobby_id) VALUES(
                    ${student_hobby.getId()},
                    ${student_hobby.getStudentId()},
                    ${student_hobby.getHobbyId()}
                )`
            );
        } catch (error: any) {
            return { error: error.message };
        }
    }
}
