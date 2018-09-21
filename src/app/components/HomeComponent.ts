import { Component } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
	selector: 'home',
	templateUrl: '../views/HomeView.html'
})



export class HomeComponent{
	public titulo: string;


	constructor(){
		this.titulo = 'Webapp de productos con Angular 6';
		//alert('Entro');
		
	}

	ngOnInit(){
		console.log('Se ha cargado el componente home.component.ts');
	}
}