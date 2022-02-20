import ConnectionBase from "../connection/ConnectionBase";
import { TableName } from "../constants/tables";
import Student from "../models/Student";

export default class StudentService extends ConnectionBase {
    public static async createStudent(student: Student): Promise<void | {}> {
        try {
            await ConnectionBase.connection(
                TableName.labesystem_student
            ).insert({
                id: student.getId(),
                name: student.getName(),
                email: student.getEmail(),
                birth_date: student.getBirthDate(),
                class_id: student.getClassId(),
            });
        } catch (error: any) {
            return { error: error.message };
        }
    }

    public static async indexStudentByName(
        name: string
    ): Promise<Student[] | []> {
        try {
            let result = await ConnectionBase.connection.raw(
                `SELECT * 
                FROM ${TableName.labesystem_student}
                WHERE CONCAT(name,  ' ') LIKE '%${name}%' ORDER BY birth_date;`
            );

            const students: Student[] = result[0];

            return students;
        } catch (error) {
            return [];
        }
    }

    public static async changeStudentClass(
        checkStudentId: string,
        newClassId: string
    ): Promise<void | {}> {
        try {
            const result = await ConnectionBase.connection(
                TableName.labesystem_student
            ).select("*");

            result.map(async (student: any): Promise<void> => {
                if (checkStudentId === student.id) {
                    await ConnectionBase.connection.raw(`
                    UPDATE ${TableName.labesystem_student} SET class_id = "${newClassId}" WHERE id = "${checkStudentId}";
                    `);
                }
            });
        } catch (error: any) {
            return { error: error.message };
        }
    }
    public static async checkStudentId(id: string): Promise<string | null> {
        try {
            const checkStudentId = await ConnectionBase.connection()
                .select("id")
                .from(TableName.labesystem_student)
                .where("id", id);
            return checkStudentId[0].id;
        } catch (error) {
            return null;
        }
    }
}
