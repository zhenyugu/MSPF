import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private loginService: LoginService) { }

  username = '';
  password = '';

  ngOnInit() {
  }

  onSubmit() {
    this.loginService.login(this.username, this.password).then(data => {
      console.log(data);
      this.router.navigate(['/seller'], { relativeTo: this.route });
    }, () => {
      console.log('fail');
    }
    ).catch(error => { console.log(error); });
  }

  register() {
    this.router.navigate(['/register'], { relativeTo: this.route });
  }
}
