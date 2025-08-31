import {PatientClass} from "./PatientClass";
import {TreatmentRoomClass} from "./TreatmentRoomClass";

export class ERMClass {
    public patientQueue: PatientClass[];
    public treatmentRoomArray: TreatmentRoomClass[];

    getRoonStatus(): Object{
        const freeRooms:number = this.treatmentRoomArray.filter(room =>
                                    room.isAvailable).length;
        const occupiedRooms:number = this.treatmentRoomArray.length - freeRooms;
        return {freeRooms, occupiedRooms};
    }

    getQueueStatus(): Object {
        let highCount = 0
        let mediumCount = 0
        let lowCount = 0

        for (const patient of this.patientQueue) {
            switch (patient.urgency){
                case "HIGH":
                    highCount++;
                   break;
                case "MEDIUM":
                    mediumCount++;
                    break;
                case "LOW":
                    lowCount++;
                    break;
            }
        }

        return {highCount, mediumCount, lowCount};
    }




}