import { Component, OnInit, viewChild, ViewChild } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { DadoComponent } from './components/dado/dado.component';
import { CronometroComponent } from './component/cronometro/cronometro.component';
import { GestionPerrosService } from './services/gestion-perros.service';
import { FormularioComponent } from "./formulario/formulario.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, DadoComponent, CronometroComponent, FormularioComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}
