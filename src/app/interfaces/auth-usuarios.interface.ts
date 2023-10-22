export interface AuthUsuarios {
    _idUsuario: string;
    _idEquipo: number;
    correoUsuario: string;
    cuentaUsuario: string;
    contrasenaUsuario: string;
    datosUsuario: {
        nombreUsuario:string;
        rutUsuario:string;
        apellidosUsuario:string;
        fechaNacUsuario: number;
    }
}
