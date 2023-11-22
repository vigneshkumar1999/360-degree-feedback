import { ServiceService } from './../service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  data={
    name:'',
    email:'',
    password:''
  }
  constructor(private service:ServiceService){}
  registerFunc(){
    this.service.addUserPost(this.data).subscribe(res=>console.log(res));
  }
}
