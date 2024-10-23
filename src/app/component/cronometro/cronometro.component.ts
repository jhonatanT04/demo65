import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  standalone: true,
  imports: [],
  templateUrl: './cronometro.component.html',
  styleUrl: './cronometro.component.scss'
})
export class CronometroComponent implements OnInit {
  segundos = 0;
  @Output() minuto= new EventEmitter()
  
  ngOnInit(): void {
      this.segundos = 0 
      setInterval(()=>{
        this.segundos++
        if(this.segundos%60==0){
          this.minuto.emit([true])
        }
      },1000)
  }
}
