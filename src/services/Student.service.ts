import ConnectionBase from "../connection/ConnectionBase";
import { TableName } from "../constants/tables";
import Student from "../models/Student";

export default class StudentService extends ConnectionBase {
    public static async createStudent(student: Student): Promise<void | {}> {
        try {
            await ConnectionBase.connection.raw(
                `INSERT INTO ${TableName.labesystem_student} VALUES(${
                    (student.getId,
                    student.getName,
                    student.getEmail,
                    student.getBirthDate,
                    student.getClassId)
                })`
            );
        } catch (error: any) {
            return { error: error.message };
        }
    }

    public static async indexStudentByName(name: string): Promise<Student[]> {
        try {
            let result = await ConnectionBase.connection.raw(
                `SELECT * FROM ${TableName.labesystem_student} WHERE name=${name} ORDER BY birth_date`
            );

            const students: Student[] = result[0];

            return students;
        } catch (error) {
            return [];
        }
    }
}
