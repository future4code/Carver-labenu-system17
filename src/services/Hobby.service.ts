import ConnectionBase from "../connection/ConnectionBase";
import { TableName } from "../constants/tables";
import Hobby from "../models/Hobby";

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
}
