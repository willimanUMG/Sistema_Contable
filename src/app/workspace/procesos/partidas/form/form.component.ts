import cuentasData from '../../../../../json/cuentas.json';
import empresasData from '../../../../../json/empresas.json';
import centroCostoData from '../../../../../json/centro.json';

import { DetalleDialogFormComponent } from './../detalle-dialog-form/detalle-dialog-form.component';
import { CentroCosto } from '@models/centro-costo';
import { Proveedores } from './../../../../core/models/proveedores';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cuentas } from '@models/cuentas';
import { Partida, PartidaDetalle } from '@models/partidas';
import { Empresas } from '@models/empresas';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmDialogComponent } from '@shared/ui/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ListadoMonedas } from '@settings/constants';

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
	loading: boolean;
	canEdit: boolean;
	partida: Partida;
  partidaDetalle: PartidaDetalle[];
	partidaID: number;
	form: UntypedFormGroup;
	baseKey: string;
	listCuentas: Cuentas[];
  listCentroCosto: CentroCosto[];
  listEmpresas: Empresas[];
  listMonedas: string[];

  dataSource: MatTableDataSource<PartidaDetalle> = new MatTableDataSource<PartidaDetalle>();
	columns: string[] = ['cuenta', 'centroCosto', 'monto', 'debe', 'haber'];

	constructor(
		private formBuilder: UntypedFormBuilder,
		private activeRoute: ActivatedRoute,
    private dialog: MatDialog,
		private router: Router
	) {
    this.partidaDetalle = [];
		this.loading = true;
		this.buildForm();

		if (this.router.url.includes('/nuevo')) {
			this.canEdit = false;
			this.baseKey = 'nuevo';
		} else {
			this.activeRoute.params.subscribe((params) => {
				this.partidaID = Number(params.ID);
			});
			this.canEdit = true;
			this.baseKey = 'edit';
			this.patchForm();
		}

		this.listCuentas = cuentasData;
    this.listEmpresas = empresasData;
    this.listCentroCosto = centroCostoData;
    this.listMonedas = ListadoMonedas.Monedas;
	}

	ngOnInit(): void {
		this.loading = false;
	}

	create(event: Event) {
		event.preventDefault();
		if (!this.canEdit) {
			this.save();
		} else {
			this.update();
		}
		this.canEdit = false;
	}
	async save() {
		// const lang: Language = new Language();
		// lang.code = this.codeField.value;
		// lang.name = this.nameField.value;
		// await this.catalogService
		// 	.saveLanguage(lang)
		// 	.then(() => {
		// 		this.notificationsService.successWithReload();
		// 	})
		// 	.catch((error: any) => this.notificationsService.errorCatched(error))
		// 	.finally(() => (this.loading = false));
	}

	async update() {
		// const lang: Partial<Language> = new Language();
		// lang.code = this.codeField.value;
		// lang.name = this.nameField.value;
		// await this.catalogService
		// 	.updateLanguage(this.language.languageID, lang)
		// 	.then(() => {
		// 		this.notificationsService.success();
		// 		this.router.navigate(['/content/languages'], {});
		// 	})
		// 	.catch((error: any) => this.notificationsService.errorCatched(error))
		// 	.finally(() => (this.loading = false));
	}

  async edit(element: any) {

	}

	async delete(value: Proveedores) {
		const dialogRef = this.dialog.open(ConfirmDialogComponent, {
			width: '95%',
			maxWidth: '500px',
			data: {
				message: '¿Esta seguro que desea eliminarlo?',
				submit: 'Aceptar',
				cancel: 'Cancelar',
			},
		});
		dialogRef.afterClosed().subscribe(async (result) => {
			if (result) {

			}
		});
	}

	buildForm() {
		this.form = this.formBuilder.group({
			fechaDocumento: ['', [Validators.required]],
			moneda: [ListadoMonedas.Monedas[0], [Validators.required]],
			empresaID: ['', [Validators.required]],
			texto: ['', [Validators.required]],
      total: [0],
		});
	}

	async patchForm() {
		this.form.patchValue({
			fechaDocumento: this.partida.fechaDocumento,
			moneda: this.partida.moneda,
			empresaID: this.partida.empresaID,
			texto: this.partida.texto,
      total: this.partida.total,
		});
	}

  agregarDetalle(){
    const dialogRef = this.dialog.open(DetalleDialogFormComponent, {
			data: {
        listCuentas: this.listCuentas,
				listCentroCosto: this.listCentroCosto
			},
		});
		dialogRef.afterClosed().subscribe(async (result) => {
			if (result) {
        this.partidaDetalle.push(result);
        this.dataSource.data = this.partidaDetalle;
			}
		});
  }

  getTotalMonto() {
    return this.partidaDetalle.map(t => t.monto).reduce((acc, value) => acc + value, 0);
  }

  getTotalDebe() {
    return this.partidaDetalle.map(t => t.debe).reduce((acc, value) => acc + value, 0);
  }

  getTotalHaber() {
    return this.partidaDetalle.map(t => t.haber).reduce((acc, value) => acc + value, 0);
  }

	get fechaDocumentoField() {
		return this.form.get('fechaDocumento');
	}

	get monedaField() {
		return this.form.get('moneda');
	}

	get empresaIDField() {
		return this.form.get('empresaID');
	}

	get textoField() {
		return this.form.get('texto');
	}

  get totalField() {
		return this.form.get('total');
	}
}
