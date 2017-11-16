import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfigService } from '../../services/app-config.service';

@Injectable()
export class GoodsServiceService {

  constructor(private http: HttpClient, private appConfig: AppConfigService) { }

  addGoods(goods: any) {
    return this.http.post(this.appConfig.getApiBaseUrl() + '/goods', goods);
  }

}
