import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-add-designation',
  templateUrl: './add-designation.component.html',
  styleUrls: ['./add-designation.component.css']
})
export class AddDesignationComponent {
  designation:string='';

  constructor(private service:ServiceService){}

  data={
    position:this.designation
  }

  addDesignation(){
  console.log(this.designation)
  this.data.position=this.designation
  this.service.postDesignation(this.data).subscribe(res=>console.log(res))
  }
 

  isValid(){
    if(this.designation=='') return false;
    else return true;
  }
}
