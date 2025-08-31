import {PatientClass} from "./PatientClass";
import {SymptomCode, Urgency} from "./types";

class PatientAssignmentClass extends PatientClass{

    public admit:boolean;

    constructor(_id: string, _name: string, age: number, symptoms:SymptomCode[], urgency:Urgency,admit:boolean) {
        super(_id, _name, age, symptoms,urgency)
        this.admit = admit;
    }



}