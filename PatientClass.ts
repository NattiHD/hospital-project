import {SymptomCode, Urgency} from "./types";

export class PatientClass {
    public _id: string;
    public _name: string;
    public age: number;
    public symptoms:SymptomCode[];
    public arriveTime:Date;
    public urgency:Urgency;

    constructor(_id: string, _name: string, age: number, symptoms:SymptomCode[], urgency:Urgency) {
        this._id = _id;
        this._name = _name;
        this.age = age;
        this.symptoms = symptoms;
        this.arriveTime = new Date();
        this.urgency = urgency;
    }

}