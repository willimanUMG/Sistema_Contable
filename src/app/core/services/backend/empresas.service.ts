import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Empresas } from '@models/empresas';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {
  endpoint = 'empresas';
	constructor(public http: HttpClient) {}

	async get(): Promise<Empresas> {
		return this.http.get<Empresas>(environment.api.url + this.endpoint).toPromise();
	}

	async post(): Promise<Empresas> {
		return this.http.post<Empresas>(environment.api.url + this.endpoint, {}).toPromise();
	}

	async delete(id: number): Promise<Empresas> {
		return this.http.delete<Empresas>(environment.api.url + this.endpoint + id).toPromise();
	}

	async update(id: number, updateData: Partial<Empresas>): Promise<Empresas> {
		return this.http
			.put<Empresas>(environment.api.url + this.endpoint + id, updateData)
			.toPromise();
	}
}
