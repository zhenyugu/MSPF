import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-goods-details',
  templateUrl: './goods-details.component.html',
  styleUrls: ['./goods-details.component.css']
})
export class GoodsDetailsComponent implements OnInit {
  goods;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  Reject() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
