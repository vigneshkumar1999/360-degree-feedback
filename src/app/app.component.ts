import { Component } from '@angular/core';
import { ServiceService } from './service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '360Fb';
  constructor(private service:ServiceService){}
  getUsers(){
    this.service.getAllUsers().subscribe(data=>console.log(data))
  }
}
