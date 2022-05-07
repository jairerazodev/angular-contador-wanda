import {NgModule} from '@angular/core'
import { ListadoComponent } from '../heroes/listado/listado.component';
import { CommonModule } from '@angular/common';
import { ContadorComponent } from './contador/contador.component';

@NgModule({
    declarations: [
        ContadorComponent
    ],
    exports: [
        ContadorComponent
    ],
    imports: [
        CommonModule
    ]
})
export class contadoresModule {};