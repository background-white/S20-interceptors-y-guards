import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionsService } from 'src/app/servicios/sessions.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogin$ = this.sesionsService.isLogin$;
  ngOnInit(){
    if (sessionStorage.getItem("Token")) {
      this.sesionsService.hide();
    }else{
      this.sesionsService.show();
    }
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private readonly sesionsService: SessionsService
  ){}

  logout(){
    sessionStorage.removeItem("Token");
    this.sesionsService.show();
    this.router.navigate(['/login'])
  }
}

