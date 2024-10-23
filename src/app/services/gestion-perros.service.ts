import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestionPerrosService {

  perros:any = []
  constructor(private http: HttpClient) { }
  async addPerros(nombre:string,raza:string){
    let data = await this.getFotoPerro2()
    this.perros.push({
      nombre: nombre,
      raza:raza,
      foto: data.message
    })
    this.getFotoPerro();
  }
  getPerros(){
    return this.perros;
  }
  getFotoPerro(){
    this.http.get<any>('https://dog.ceo/api/breeds/image/random').subscribe(data=>{
      console.log(data)
    })
  }
  async getFotoPerro2():Promise<any>{

    return firstValueFrom(this.http.get<any>('https://dog.ceo/api/breeds/image/random'))
    
  }
  
}
