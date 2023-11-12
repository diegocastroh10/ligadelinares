import { Timestamp } from "firebase/firestore";

export interface Noticias {
    tituloNoticia: string;
    autorNoticia: string;
    descripcionNoticia: string;
    fechaNoticia: Timestamp;
    imgNoticia: string;
    mostrarNoticia: boolean;
}
