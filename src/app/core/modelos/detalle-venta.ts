import { Producto } from "./Producto"

export interface DetalleVenta {
    id : number,
    cantidad : number,
    producto : Producto,
    subTotal : number
}