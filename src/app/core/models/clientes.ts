import { Cuentas } from "./cuentas";

export class Clientes{
  clienteID: number;
  codigo: string;
  nombre: string;
  direccion: string;
  nit: string;
  cuentaID?: number;
  cuentaContable?: Cuentas;
}
