import { CentroCosto } from '@models/centro-costo';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Empresas } from '@models/empresas';
import empresasData from '../../../../../json/empresas.json';

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
	loading: boolean;
	edit: boolean;
	centroCosto: CentroCosto;
	centroCostoID: number;
	form: UntypedFormGroup;
	baseKey: string;
	listEmpresas: Empresas[];

	constructor(
		private formBuilder: UntypedFormBuilder,
		private activeRoute: ActivatedRoute,
		private router: Router
	) {
		this.loading = true;
		this.buildForm();

		if (this.router.url.includes('/nuevo')) {
			this.edit = false;
			this.baseKey = 'nuevo';
		} else {
			this.activeRoute.params.subscribe((params) => {
				this.centroCostoID = Number(params.ID);
			});
			this.edit = true;
			this.baseKey = 'edit';
			this.patchForm();
		}

		this.listEmpresas = empresasData;
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
			empresaID: ['', [Validators.required]],
			nombre: ['', [Validators.required]],
			responsable: ['', [Validators.required]],
		});
	}

	async patchForm() {
		this.form.patchValue({
			empresaID: this.centroCosto.empresaID,
			nombre: this.centroCosto.nombre,
			responsable: this.centroCosto.responsable,
		});
	}

	get empresaIDField() {
		return this.form.get('empresaID');
	}

	get nombreField() {
		return this.form.get('nombre');
	}

	get responsableField() {
		return this.form.get('responsable');
	}
}
