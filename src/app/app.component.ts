import { Component } from '@angular/core';
import { UsersService } from './servicios/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'actividad-20';
  users: any;

  constructor(
    private usersService: UsersService
  ) { }

  listar(){
    this.usersService.getAllUsers()
    .subscribe((data) => this.users = data)
  }

}
