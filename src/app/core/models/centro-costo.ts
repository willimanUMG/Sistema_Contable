import { Empresas } from '@models/empresas';

export class CentroCosto{
  costoID: number;
  empresaID: number;
  nombre: string;
  responsable: string;
  empresa?: Empresas;
}
