import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register } from '../model/Register';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  register : Register

  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/registerms/register';

  getRegister(){
    return this.http.get<Register[]>(this.Url)
  }
}
