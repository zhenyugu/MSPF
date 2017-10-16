import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

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
    this.router.navigate(['/dashboard'], { relativeTo: this.route });
  }
}
