import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUri: string = "https://jsonplaceholder.typicode.com/users"
  
  constructor(
    private http: HttpClient,
  ) { }

  getAllUsers() {
    return this.http.get(this.apiUri)
  }
  
}
