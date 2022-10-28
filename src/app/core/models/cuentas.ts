import { Empresas } from '@models/empresas';

export class Cuentas {
  cuentaID?: number;
  empresaID: number;
  padreCuentaID?: number;
  codigo: string;
  nombre: string;
  empresa?: Empresas;
  padreCuenta?: Cuentas;
}
