export default abstract class Person {
    private id: string;
    private name: string;
    private email: string;
    private birth_date: string;
    private class_id: string;
    constructor(
        id: string,
        name: string,
        email: string,
        birth_date: string,
        class_id: string
    ) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.birth_date = birth_date;
        this.class_id = class_id;
    }

    public getId(): string {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getEmail(): string {
        return this.email;
    }

    public getBirthDate(): string {
        return this.birth_date;
    }

    public getClassId(): string {
        return this.class_id;
    }

    public static isValidDate(date: any): boolean {
        const regEx = /^\d{4}-\d{2}-\d{2}$/;
        if (!date.match(regEx)) {
            return false;
        }

        const test_date = new Date(date);
        const dNum = test_date.getTime();

        if (!dNum && dNum !== 0) {
            return false; // NaN value, Invalid date
        }
        return test_date.toISOString().slice(0, 10) === date;
    }
}
