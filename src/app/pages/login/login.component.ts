import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionsService } from 'src/app/servicios/sessions.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(
    private sessionsService: SessionsService,
    private route: ActivatedRoute,
    private router: Router,
    private readonly sesionsService: SessionsService
  ) { }

  ngOnInit() {
    if (sessionStorage.getItem("Token")) {
      this.sesionsService.hide();
    } else {
      this.sesionsService.show();
    }
  }

  onSubmit() {
    this.sessionsService.login(this.loginForm.value).subscribe((data: any) => {
      if (data.token) {
        sessionStorage.setItem("Token", data.token);
        this.sesionsService.hide();
        this.router.navigate(['/post'])
      }
    })
  }
}
