import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Sistema_Contable';

  constructor(){
    // Set del mínimo de altura variable
    const root = document.documentElement;
		root.style.setProperty('--main-heigth', String(window.innerHeight + 'px'));
  }

  // Ajusta la variable de altura mínima
	@HostListener('window:resize', ['$event'])
	onResize(event) {
		const root = document.documentElement;
		root.style.setProperty('--main-heigth', String(event.target.innerHeight + 'px'));
	}

}



