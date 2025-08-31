import {PatientClass} from "./PatientClass";

export class TreatmentRoomClass {
    public id: string;
    public isAvailable: boolean;
    public currentPatient: PatientClass;

    constructor(id: string, isAvailable: boolean, currentPatient: PatientClass) {
        this.id = id;
        this.isAvailable = isAvailable;
        this.currentPatient = currentPatient;
    }
}