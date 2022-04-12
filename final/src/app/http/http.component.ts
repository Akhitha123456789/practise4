import { Component, OnInit } from '@angular/core';
import { TalkService } from '../talk.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
// shiva:any
name:any;
price:any;
brand:any
details:any
body:any;
id:any
  constructor(private ak:TalkService) { }

  ngOnInit(): void {

    this.ak.getUser().subscribe((res)=>{
      console.log(res);
      this.details=res
      
    })
  }

    adddetails() {
      const newObj={
        name:this.name,
        price:this.price,
        brand:this.brand,
        id:this.id

      }
      this.ak.addUser(newObj).subscribe((res)=>{
        console.log(res);
        
      })
    }
    updatedetails(){
      const newObj={
        name:this.name,
        price:this.price,
        brand:this.brand,
        id:this.id
      }
      this.ak.updateUser(this.id,newObj).subscribe((res)=>{
        console.log(res);
        

      })
    }


    deletedetails(){
      const newObj={
        name:this.name,
        price:this.price,
        brand:this.brand,
        id:this.id
      }
      this.ak.deleteUser(this.id,newObj).subscribe((res)=>{
        console.log(res);
        

      })
    }
  

  }






