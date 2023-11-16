import { Timestamp } from "firebase/firestore";

export interface Partidos {
    fechaPartido: Timestamp;
    equipoLocal: string;
    equipoVisita: string;
    resultadoPartido: string;
    goleadorPartido: string;
    mvpPartido: string;
    arbitrosPartido:string;
    mesaPartido:string;
    uidTorneo:string;
}
