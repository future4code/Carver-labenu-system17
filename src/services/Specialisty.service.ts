import ConnectionBase from "../connection/ConnectionBase";

export default class SpecialityService extends ConnectionBase{
    public static async getProfessorBySpeciality(): Promise<any>{
        try {
            const result = await ConnectionBase.connection.raw(`
                
            `)
        } catch (error: any) {
            return { error: error.message };
        }
    }
}