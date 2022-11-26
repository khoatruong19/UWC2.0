import { JanitorList } from "./JanitorList";
import { JanitorAssignment } from "./MCPInfoModal";

export const JanitorWorkshift = [
    {
        workshift: "7h30 - 12h30",
        monday: JanitorAssignment(JanitorList[0]),
        tuesday: JanitorAssignment(JanitorList[1]),
        wednesday: JanitorAssignment(JanitorList[2]),
        thursday: JanitorAssignment(JanitorList[3]),
        friday: JanitorAssignment(JanitorList[4]),
        saturday: JanitorAssignment(JanitorList[5]),
        sunday: JanitorAssignment(JanitorList[6])
    }
]
