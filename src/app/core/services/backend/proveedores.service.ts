import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Proveedores } from '@models/proveedores';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {
  endpoint = 'proveedores';
	constructor(public http: HttpClient) {}

	async get(): Promise<Proveedores> {
		return this.http.get<Proveedores>(environment.api.url + this.endpoint).toPromise();
	}

	async post(): Promise<Proveedores> {
		return this.http.post<Proveedores>(environment.api.url + this.endpoint, {}).toPromise();
	}

	async delete(id: number): Promise<Proveedores> {
		return this.http.delete<Proveedores>(environment.api.url + this.endpoint + id).toPromise();
	}

	async update(id: number, updateData: Partial<Proveedores>): Promise<Proveedores> {
		return this.http
			.put<Proveedores>(environment.api.url + this.endpoint + id, updateData)
			.toPromise();
	}
}
