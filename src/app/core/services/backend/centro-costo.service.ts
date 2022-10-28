import { CentroCosto } from '@models/centro-costo';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';

@Injectable({
	providedIn: 'root',
})
export class CentroCostoService {
	endpoint = 'centroCosto';
	constructor(public http: HttpClient) {}

	async get(): Promise<CentroCosto> {
		return this.http.get<CentroCosto>(environment.api.url + this.endpoint).toPromise();
	}

	async post(): Promise<CentroCosto> {
		return this.http.post<CentroCosto>(environment.api.url + this.endpoint, {}).toPromise();
	}

	async delete(id: number): Promise<CentroCosto> {
		return this.http.delete<CentroCosto>(environment.api.url + this.endpoint + id).toPromise();
	}

	async update(id: number, updateData: Partial<CentroCosto>): Promise<CentroCosto> {
		return this.http
			.put<CentroCosto>(environment.api.url + this.endpoint + id, updateData)
			.toPromise();
	}
}
