import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompartirDatosService {
  usuario: string = '';
  contrasenia: number =0;
  constructor() { }
}
