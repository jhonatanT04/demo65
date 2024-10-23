import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dado',
  standalone: true,
  imports: [],
  templateUrl: './dado.component.html',
  styleUrl: './dado.component.scss'
})
export class DadoComponent implements OnInit{
  valor = 0 ;
  @Input() color:string = '';
  
  ngOnInit(): void {
    this.lanzar()
  }
  direccion =''
  lanzar(){
    this.valor = Math.trunc(Math.random()*6) +1    
    if(this.valor===1){
      this.direccion = "uno.png"
    }else if(this.valor===2){
      this.direccion = "dos.png"
    }else if(this.valor===3){
      this.direccion = "tres.png"
    }else if(this.valor===4){
      this.direccion = "cuatro.png"
    }else if(this.valor===5){
      this.direccion = "cinco.png"
    }else if(this.valor===6){
      this.direccion = "seis.png"
    }
    
  }

}
