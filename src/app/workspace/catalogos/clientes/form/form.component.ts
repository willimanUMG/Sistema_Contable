import { Clientes } from '@models/clientes';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cuentas } from '@models/cuentas';
import cuentasData from '../../../../../json/cuentas.json';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  loading: boolean;
	edit: boolean;
	cliente: Clientes;
	clienteID: number;
	form: UntypedFormGroup;
	baseKey: string;
  listCuentas: Cuentas[];

	constructor(private formBuilder: UntypedFormBuilder, private activeRoute: ActivatedRoute, private router: Router,) {
		this.loading = true;
		this.buildForm();

		if (this.router.url.includes('/nuevo')) {
			this.edit = false;
			this.baseKey = 'nuevo';
		} else {
			this.activeRoute.params.subscribe((params) => {
				this.clienteID = Number(params.ID);
			});
			this.edit = true;
			this.baseKey = 'edit';
			this.patchForm();
		}

    this.listCuentas = cuentasData;
	}

	ngOnInit(): void {
		this.loading = false;
	}

	create(event: Event) {
		event.preventDefault();
		if (!this.edit) {
			this.save();
		} else {
			this.update();
		}
		this.edit = false;
	}

	// Guarda nuevo lenguaje
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

	// Actualiza lenguaje
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

	buildForm() {
		this.form = this.formBuilder.group({
			codigo: ['', [Validators.required]],
			nombre: ['', [Validators.required]],
			cuentaID: ['', [Validators.required]],
			nit: ['', [Validators.required]],
		});
	}


	async patchForm() {
		this.form.patchValue({
			codigo: this.cliente.codigo,
			nombre: this.cliente.nombre,
      cuentaID: this.cliente.cuentaID,
      nit: this.cliente.nit,
		});
	}

	get codigoField() {
		return this.form.get('codigo');
	}

	get nombreField() {
		return this.form.get('nombre');
	}

	get cuentaIDField() {
		return this.form.get('cuentaID');
	}

	get nitField() {
		return this.form.get('nit');
	}

}
