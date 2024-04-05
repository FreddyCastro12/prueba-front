import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './modules/employees/employees.component';

/**
 * Constante que contiene todos los router de cada modulo del
 * core de la aplicacion, esta constante es importado solamente
 * del modulo core o principal 'app.module.ts'
 */
const ROUTES: Routes = [
    {
        path: '',
        component: EmployeesComponent,
        pathMatch: 'full'
    },
    {
        path: 'employees',
        component: EmployeesComponent
    }
];
@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
