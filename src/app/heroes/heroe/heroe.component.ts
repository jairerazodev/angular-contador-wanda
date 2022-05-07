import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
    nombre: string = 'Ironman';
    edad: number = 41;
    // producto de un getter se ponen en () pero se llama en el html como una propiedad
    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }
    // Producto de un metodo que se llama con () tanto al crearlo como al invocarlo en el html
    obtenerNombre(): string {
        return `${this.nombre} * ${this.edad}`;
    }

    cambiarNombre(): void {
        this.nombre = 'Spiderman';

    }

    cambiarEdad(): void {
        this.edad = 30;
    }

}