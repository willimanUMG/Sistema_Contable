import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class NotificationsService {
	private title = 'Novuskills™';
	private messages = new BehaviorSubject<any>(null);
	messages$ = this.messages.asObservable();

	constructor(private toastr: ToastrService) {}

	// Notificacion de existo
	success(message = 'messages.success', params: any = {}) {
		this.messages.next({
			type: 'success',
			message,
			params,
			reload: false,
			title: this.title,
		});
	}

	// Notificacion de exito con recarga de pagina
	successWithReload(message = 'messages.success', params: any = {}) {
		this.messages.next({
			type: 'success',
			message,
			params,
			reload: true,
			title: this.title,
		});
	}

	// Notificacion de error
	error(message = 'messages.error', params: any = {}) {
		this.messages.next({
			type: 'error',
			message,
			params,
			reload: false,
			title: this.title,
		});
	}

	// Notificaion de informacion
	info(message: string, params: any = {}) {
		this.messages.next({
			type: 'info',
			message,
			params,
			reload: false,
			title: this.title,
		});
	}

	// Notificacion de advertencia
	warning(message: string, params: any = {}) {
		this.messages.next({
			type: 'warning',
			message,
			params,
			reload: false,
			title: this.title,
		});
	}

	// Error obtenido
	errorCatched(response: any) {
		let statusCode = 500;
		if (response.statusCode) {
			statusCode = response.statusCode;
		} else if (response.error) {
			statusCode = response.error.statusCode;
		}

		switch (statusCode) {
			case 400:
				this.error('errors.invalidQuery');
				break;
			case 401:
				this.error('errors.unauthorized');
				break;
			case 402:
				this.error('errors.paymentRequired');
				break;
			case 403:
				this.error('errors.forbidden');
				break;
			case 404:
				this.error('errors.notFound');
				break;
			case 422:
				this.error('errors.badData');
				break;
			case 600:
				this.error('messages.error');
				break;
			case 601:
				this.error('errors.tokenInvalid');
				break;
			case 602:
				this.error('errors.tokenUsed');
				break;
			case 603:
				this.error('errors.invalidUser');
				break;
			case 604:
				this.error('errors.userDisabled');
				break;
			case 605:
				this.error('errors.businessDisabled');
				break;
			default:
				this.error('messages.error');
				break;
		}
	}

	// Muestra notificacion personalizada
	custom(
		component: any,
		autoHide = true,
		milliseconds = 5000,
		setPositionClass = 'notifications-position-top',
		showProgressBar = false
	) {
		const audio = new Audio();
		audio.src = '/assets/mp3/notification.mp3';
		audio.play();

		return this.toastr.show('', '', {
			disableTimeOut: !autoHide,
			tapToDismiss: false,
			toastClass: 'empty-notifications',
			positionClass: setPositionClass,
			toastComponent: component,
			timeOut: milliseconds,
			extendedTimeOut: milliseconds / 2,
			progressBar: showProgressBar,
		});
	}

	// Limpie Toast
	clearToast(toastId: number) {
		this.toastr.clear(toastId);
	}

	// Limpie Toast
	clearToasts() {
		this.toastr.clear();
	}

	// Mostrar notificación de bienvenida
	async showWelcome(name): Promise<string> {
		this.success('global.welcome', { name });

		return new Promise((resolve) => {
			let timeout;
			timeout = setTimeout(() => {
				if (timeout) {
					clearTimeout(timeout);
					timeout = null;
				}
				return resolve(name);
			}, 1000);
		});
	}
}
