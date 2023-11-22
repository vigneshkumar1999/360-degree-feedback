import { map } from 'rxjs/operators';
import { ServiceService } from './../service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit{
    position:String[]=[];
    names:String[]=[];
    data={
      name:'',
      email:'',
      password:'',
      active:'',
      role:'',
      lead:'',
      designation:''
    }
    alter={
      name:'',
      email:'',
      active:''
    }
    constructor(private service:ServiceService){}
     ngOnInit() {
        this.service.getAllDesignation().subscribe((res)=>{
          this.position=res.map((data: { position: any })=>data.position)
        })

        this.service.getAllEmployees().subscribe(res=>{
          this.names= res.map((data: { name: any; })=>data.name)
          })
     }
     clickFunc(){
      console.log(this.alter)
     }
     postEmployee(){
      this.service.postEmployee(this.data).subscribe(res=>console.log(res))
     }

     alterEmployee(){
      this.service.putEmployee(this.alter).subscribe(res=>console.log(res))
      setTimeout(()=>{
        this.service.getAllEmployees().subscribe(res=>console.log(res));
      },1000)
     }
}
