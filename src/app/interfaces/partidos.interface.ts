import { Timestamp } from "firebase/firestore";

export interface Partidos {
    uidPartido: string;
    fechaPartido: Timestamp;
    equipoLocal: string;
    equipoVisita: string;
    resultadoPartido: string;
    mvpPartido:string;
    goleadorPartido:string;
    arbitrosPartido:string;
    mesaPartido:string;
}
