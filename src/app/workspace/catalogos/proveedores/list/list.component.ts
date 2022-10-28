import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Proveedores } from '@models/proveedores';
import { NotificationsService } from '@services/utils/notifications.service';
import { ConfirmDialogComponent } from '@shared/ui/confirm-dialog/confirm-dialog.component';
import proveedoresData from '../../../../../json/proveedores.json';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  loading: boolean;
	dataSource: MatTableDataSource<Proveedores> = new MatTableDataSource<Proveedores>();
	columns: string[] = ['proveedorID', 'codigo', 'nombre', 'nit', 'cuentaContable'];

	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
	@ViewChild(MatSort, { static: true }) sort: MatSort;

	constructor(
		public router: Router,
		private dialog: MatDialog,
		private notificationsService: NotificationsService
	) {}

	ngOnInit(): void {
    this.dataSource.data = proveedoresData;
  }

	new() {
		this.router.navigate(['/workspace/catalogos/proveedores/nuevo']);
	}

	edit(element: any) {
		this.router.navigate(['/content/catalogos/proveedores/edit', element._id]);
	}

	delete(value: Proveedores) {
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
				// await this.translationService
				// 	.deleteTranslation(value._id)
				// 	.then(() => {
				// 		this.notificationsService.success();
				// 		this.changeLanguage(this.languageControl.value);
				// 	})
				// 	.catch((error: any) => this.notificationsService.errorCatched(error));
			}
		});
	}

}
