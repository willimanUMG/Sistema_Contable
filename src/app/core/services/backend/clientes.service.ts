import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Clientes } from '@models/clientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  endpoint = 'clientes';
	constructor(public http: HttpClient) {}

	async get(): Promise<Clientes> {
		return this.http.get<Clientes>(environment.api.url + this.endpoint).toPromise();
	}

	async post(): Promise<Clientes> {
		return this.http.post<Clientes>(environment.api.url + this.endpoint, {}).toPromise();
	}

	async delete(id: number): Promise<Clientes> {
		return this.http.delete<Clientes>(environment.api.url + this.endpoint + id).toPromise();
	}

	async update(id: number, updateData: Partial<Clientes>): Promise<Clientes> {
		return this.http
			.put<Clientes>(environment.api.url + this.endpoint + id, updateData)
			.toPromise();
	}
}
