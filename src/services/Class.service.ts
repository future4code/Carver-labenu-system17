import ConnectionBase from "../connection/ConnectionBase";
import { ModuleValues } from "../constants/module";
import { TableName } from "../constants/tables";
import Class from "../models/Class";

export default class ClassService extends ConnectionBase {
    public static async createClass(class_labenu: Class): Promise<void | {}> {
        try {
            
            await ConnectionBase.connection.raw(
                `INSERT INTO ${TableName.labesystem_class} (id, name, module) VALUES(
                    ${class_labenu.getId()},
                    ${class_labenu.getName()},
                    ${class_labenu.getModule()}
                )`
                
            );

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
        module: ModuleValues
    ): Promise<void | {}> {
        try {
            await ConnectionBase.connection.raw(
                `UPDATE ${TableName.labesystem_class} SET module=${module}`
            );
        } catch (error: any) {
            return { error: error.message };
        }
    }

    public static async getAllClasses(): Promise<Class[] | null> {
        try {
            const result = await ConnectionBase.connection(
                TableName.labesystem_class
            ).select("*");
            return result;
        } catch (error: any) {
            return null;
        }
    }
    public static async checkClassId(id: string): Promise<string> {
        const checkClassId = await ConnectionBase.connection()
            .select("id")
            .from(TableName.labesystem_class)
            .where("id", id);
        return checkClassId[0].id;
    }
}
