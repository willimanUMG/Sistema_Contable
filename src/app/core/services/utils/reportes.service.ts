import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Injectable({
	providedIn: 'root',
})
export class ReportesService {
	constructor() {}

	imprimir(encabezado: string[], cuerpo: Array<any>, piePagina: Array<any>, titulo: string, guardar?: boolean) {
		const doc = new jsPDF({
			orientation: 'portrait',
			unit: 'px',
			format: 'letter',
		});

    console.log(cuerpo);
		doc.text(titulo, doc.internal.pageSize.width / 2, 25, { align: 'center' });
		autoTable(doc, {
			head: [encabezado],
			body: cuerpo,
      foot: piePagina.length > 0 ? piePagina : null,
      showFoot:'everyPage'
		});

		if (guardar) {
			const fechaActual = new Date();
			doc.save(
				fechaActual.getDate() +
					fechaActual.getMonth() +
					fechaActual.getFullYear() +
					fechaActual.getTime() +
					'.pdf'
			);
		}else{
      window.open(URL.createObjectURL(doc.output("blob")))
    }
	}
}
