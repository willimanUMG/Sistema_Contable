import { Cuentas } from "./cuentas";

export class Proveedores{
  proveedorID: number;
  codigo: string;
  nombre: string;
  direccion: string;
  nit: string;
  cuentaID?: number;
  cuentaContable?: Cuentas;
}
