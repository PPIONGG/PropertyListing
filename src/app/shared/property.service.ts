import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private http: HttpClient) { }
  //Now Add Get, Post, Put and delete method here
  //add property using post maethod
  addlisting(data: any) {
    return this.http.post('http://localhost:3000/properties', data).pipe(map((res: any) => {
      return res;
    }))
  }

  //get all property using get method
  getAllProp() {
    return this.http.get('http://localhost:3000/properties').pipe(map((res: any) => {
      return res;
    }))
  }

  //update property using put method
  updatePrp(data: any, id: number) {
    return this.http.put('http://localhost:3000/properties/' + id, data).pipe(map((res: any) => {
      return res;
    }))
  }

    //delete property using put method
    deletePrp(id: number) {
      return this.http.delete('http://localhost:3000/properties/' + id).pipe(map((res: any) => {
        return res;
      }))
    }
    //service part done
}
