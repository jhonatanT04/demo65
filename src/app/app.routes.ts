import { Routes } from '@angular/router';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { MisionComponent } from './pages/mision/mision.component';
import { InicioComponent } from './pages/inicio/inicio.component';

export const routes: Routes = [
    {
        path:'',
        component:InicioComponent
    },
    {
        path:"pages/acerca-de",
        component:AcercaDeComponent
    },
    {
        path:"pages/mision",
        component:MisionComponent
    }
];
