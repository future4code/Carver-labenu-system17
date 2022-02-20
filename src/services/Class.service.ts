import ConnectionBase from "../connection/ConnectionBase";
import { TableName } from "../constants/tables";
import Class from "../models/Class";

export default class ClassService extends ConnectionBase {
    public static async createClass(class_labenu: Class): Promise<void | {}> {
        try {
            await ConnectionBase.connection(TableName.labesystem_class).insert({
                id: class_labenu.getId(),
                name: class_labenu.getName(),
                module: class_labenu.getModule(),
            });
        } catch (error: any) {
            return { error: error.message };
        }
    }

    public static async getActiveClass(): Promise<Class[] | []> {
        try {
            let result = await ConnectionBase.connection.raw(
                `SELECT * FROM ${TableName.labesystem_class} WHERE module IN (1, 2, 3, 4, 5, 6) ORDER BY module`
            );

            const classes: Class[] = result[0];

            return classes;
        } catch (error) {
            return [];
        }
    }

    public static async updateClassModule(
        module: number,
        class_id: string
    ): Promise<void | {}> {
        try {
            console.log(module, class_id);
            await ConnectionBase.connection(TableName.labesystem_class)
                .where("id", "=", class_id)
                .update({ module });
        } catch (error: any) {
            return { error: error.message };
        }
    }

    public static async getAllClasses(): Promise<Class[] | null> {
        try {
            const result = await ConnectionBase.connection(
                TableName.labesystem_class
            ).orderBy("module");
            return result;
        } catch (error: any) {
            return null;
        }
    }

    public static async checkClassId(id: string): Promise<string | null> {
        try {
            const checkClassId = await ConnectionBase.connection(
                TableName.labesystem_class
            ).where("id", id);
            return checkClassId[0].id;
        } catch (error: any) {
            return null;
        }
    }
}
