import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { map, filter } from "rxjs/operators";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor(public commonService: CommonService) {

    //1. 异步回调
    this.commonService.getDatacb((res: string) => {
      console.log(res);
    });

    //2. 通过 promise
    this.commonService.getPromise().then((res) => {
      console.log(res);
    })

    //3.通过 RxJS 发布订阅
    var rxData = this.commonService.getObservable();
    let temp: any;
    rxData.subscribe(value => {
      temp = value;
      console.log("subscribe:" + temp);
    });
    console.log("out sub:" + temp);

    //4.
    var rxIntervalData = this.commonService.getRxIntervalData();
    var ret = rxIntervalData.subscribe(data => {
      console.log(data);
    });

    setTimeout(() => {
      ret.unsubscribe();
    }, 5000)
  }





  ngOnInit(): void {
  }


}
