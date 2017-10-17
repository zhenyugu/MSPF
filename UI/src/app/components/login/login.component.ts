import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  username = 'zhenyu';
  password = 'password';

  ngOnInit() {
  }

  onSubmit() {
    console.log(1);
    this.router.navigate(['/seller'], { relativeTo: this.route });
  }

  register() {
    this.router.navigate(['/register'], { relativeTo: this.route });
  }
}
