import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent implements OnInit{
  @Input()
  listObjetos:{codigo:number,descripcion:string,precio:number}[] = []

  @Output()
  validar:EventEmitter<{codigo:number,descripcion:string,precio:number}[]> = new EventEmitter
  cod = 0
  des = ''
  pr = 0
  
  
  recorrerList(){
    let newArticulos = this.listObjetos.filter(articulo=> articulo.codigo === this.cod)
    if(newArticulos.length===0){
      this.listObjetos.push({codigo: this.cod, descripcion : this.des, precio : this.pr});
      this.validar.emit(this.listObjetos)
      this.limpiarCampos
    }
    else{
      for (let index = 0; index < this.listObjetos.length; index++) {
        const element = this.listObjetos[index]
        if (element.codigo===this.cod) {
          this.listObjetos[index] = {codigo:this.cod, descripcion :this.des, precio :this.pr}
          this.validar.emit(this.listObjetos)
          this.limpiarCampos
          break;
        }
        
      }
    }
  }
  limpiarCampos(){
    this.cod = 0
    this.des = ''
    this.pr = 0
  }
  
  @Input()
  codigoSele:number = 0
  ngOnInit(): void {
    this.selec(this.codigoSele)
    this.bor(this.codEliminar)
  }
  selec(cod:number){
    if(cod!=0){
      this.cod =this.listObjetos.filter(articulo => articulo.codigo===cod)[0].codigo
      this.des =this.listObjetos.filter(articulo => articulo.codigo===cod)[0].descripcion
      this.pr =this.listObjetos.filter(articulo => articulo.codigo===cod)[0].precio
    }
  }
  @Input()
  codEliminar:number = 0
  bor(cod:number){
    let newArticulos = this.listObjetos.filter(articulo => articulo.codigo !== cod )
    this.limpiarCampos()
    this.listObjetos = newArticulos
  }
  
  


}
