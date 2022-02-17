export default abstract class Person {
    private _id: string;
    private _name: string;
    private _email: string;
    private _birth_date: Date;
    private _class_id: string;

    constructor(
        id: string,
        name: string,
        email: string,
        birth_date: Date,
        class_id: string
    ) {
        this._id = id;
        this._name = name;
        this._email = email;
        this._birth_date = birth_date;
        this._class_id = class_id;
    }
}
