import { Component, OnInit } from '@angular/core';
import { Register } from './model/Register';
import {ServiceService} from './Service/service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'front-end';

  register:Register[];
  constructor(private service:ServiceService){ }

  ngOnInit() {
    this.service.getRegister()
    .subscribe(data => {
      this.register = data;
    })

  }
}
