import { v4 as uuidv4 } from "uuid";

export default abstract class CommonEntity {
    static generateId(): string {
        return uuidv4();
    }
}
