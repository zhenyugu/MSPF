import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { GoodsModel } from '../goods-model';
import { GoodsServiceService } from '../goods-service.service';

@Component({
  selector: 'app-goods-details',
  templateUrl: './goods-details.component.html',
  styleUrls: ['./goods-details.component.css']
})
export class GoodsDetailsComponent implements OnInit {
  goods = new GoodsModel(0, '', '', '', 0, 0, '', 1, 1, 1, new Date());
  types = ['test1', 'test2'];
  powers = ['Really Smart', 'Super Flexible',
  'Super Hot', 'Weather Changer'];

  constructor(private router: Router, private route: ActivatedRoute, private goodsService: GoodsServiceService) {
  }

  ngOnInit() {
  }

  reject() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  addGoods() {
    const goods = this.goods;
    goods.Status = '0';
    this.goodsService.addGoods(goods).subscribe((res) => {
      console.log(res);
    });

  }
}

