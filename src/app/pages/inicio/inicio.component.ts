import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { DadoComponent } from '../../components/dado/dado.component';
import { CronometroComponent } from '../../component/cronometro/cronometro.component';
import { FormularioComponent } from '../../formulario/formulario.component';
import { GestionPerrosService } from '../../services/gestion-perros.service';


@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, DadoComponent, CronometroComponent, FormularioComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent implements OnInit{
  title = 'demo65';
  name = "Jhonatan";
  edad = 10;
  salario = 120;
  sueldos = [1700,500,950,450]
  a =0
  b=0
  c=0
  articulos:{codigo:number,descripcion:string,precio:number}[] = [
    {codigo: 1, descripcion : "TV", precio : 12.2},
    {codigo: 2, descripcion : "Laptop", precio : 99.2},
    {codigo: 3, descripcion : "Microondas", precio : 34.2}
  ]
  esMayorDeEdad(){
    if (this.edad>=18) {
      return 'Es mayor de edad';  
    } else {
      return 'Es menor de edad'
    }
  }
  contador =0 ;
  incrementar (){
    this.contador =this.contador+1
  }
  sumar(){
    this.c = this.a + this.b
  }
  cod = 0
  des = " "
  prec = 0 ;
  remplazarListArticulos(art:{codigo:number,descripcion:string,precio:number}[]){
    this.articulos = art;
  }
  agregar(codigo:number){
    let newArticulos = this.articulos.filter(articulo=> articulo.codigo === codigo)
    if(newArticulos.length===0){
      this.articulos.push({codigo: codigo, descripcion : this.des, precio : this.prec});
    }else{
      for (let index = 0; index < this.articulos.length; index++) {
        const element = this.articulos[index]
        if (element.codigo===codigo) {
          this.articulos[index] = {codigo: codigo, descripcion :this.des, precio :this.prec}
          break;
        }
        
      }
    }
  }
  
  eliminar(codigo:number){
    let newArticulos = this.articulos.filter(articulo => 
      articulo.codigo !== codigo )
    this.articulos = newArticulos
  }
  seleccionar(codigo:number){
    this.cod =this.articulos.filter(articulo => articulo.codigo===codigo)[0].codigo
    this.des =this.articulos.filter(articulo => articulo.codigo===codigo)[0].descripcion
    this.prec =this.articulos.filter(articulo => articulo.codigo===codigo)[0].precio
  }


  
  @ViewChild('formu') fromu! : FormularioComponent
  selecDos(cod:number){
    this.fromu.selec(cod)
  }
  varr:{codigo:number,descripcion:string,precio:number}[] =[]
  borrarDos(cod:number){
    this.fromu.bor(cod)
    this.articulos =this.fromu.listObjetos
  }



  @ViewChild('dado1') dado1! : DadoComponent
  @ViewChild('dado2') dado2! : DadoComponent
  @ViewChild('dado3') dado3! : DadoComponent

  xd=''
  lanzar (){
    this.dado1.lanzar();
    this.dado2.lanzar();
    this.dado3.lanzar();
    
    const x1=this.dado1.valor;
    const x2=this.dado2.valor;
    const x3=this.dado3.valor;
    
    if(x1===x2||x2===x3||x3===x1){
      this.xd = 'Ganado'
    }else{
      this.xd = 'Perdido'
    }
  }
  minuto =0 ;
  perros:any
  actualizar(estado:boolean){
    if(estado==true){
      this.minuto++
    }
  }

  constructor(private perrosService: GestionPerrosService) {

  }
  ngOnInit(): void {
      this.perrosService.addPerros('Renzo','Beagle');
      this.perrosService.addPerros('Rambo','Koker');
      this.perros = this.perrosService.getPerros(); 
  }
}  