import { Cliente } from "./cliente";
import { DetalleVenta } from "./detalle-venta";

export interface Venta {
    id : number,
    fecha: string
    detalleVentas : DetalleVenta[],
    cliente : Cliente,
    total : number
}

export interface VentaRespuesta {
    mensaje : string,
    respuesta : Venta[]
}

export interface VentaRespuestaM {
    mensaje : string,
    respuesta : Venta
}