import { Cuentas } from '@models/cuentas';
import { CentroCosto } from '@models/centro-costo';
import { DateSelectionModelChange } from '@angular/material/datepicker';

export class Partida {
	partidaID?: number;
	empresaID: number;
	fechaDocumento: Date;
	fechaRegisstro: Date;
	referencia: string;
	moneda: string;
	texto: string;
	total: number;
}

export class PartidaDetalle {
	partidaDetalleID?: number;
	partidaID?: number;
  cuentaID: number;
	costoID?: number;
	monto: number;
	debe: number;
	haber: number;
  centroCosto: CentroCosto;
  cuenta?: Cuentas;
}
