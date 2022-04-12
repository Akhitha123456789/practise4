import { Injectable } from '@angular/core';
import{HttpClient} from'@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TalkService {

  constructor(private akhi:HttpClient) { }
  getUser(){
    return this.akhi.get<any>('http://localhost:3000/details')
  }
  addUser(body:any){
    return this.akhi.post<any>(`http://localhost:3000/details`,body)
  }
  updateUser(id:any,body:any){
    return this.akhi.put<any>(`http://localhost:3000/details/`+id,body)
  }
  deleteUser(id:any,body:any){
    return this.akhi.delete<any>(`http://localhost:3000/details/`+id,body)
  }
}
