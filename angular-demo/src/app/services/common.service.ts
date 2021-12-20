import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  //异步方式
  getDatacb(cb: any) {
    setTimeout(() => {
      cb("getcb data");
    }, 1000);
  }

  //promise 方式
  getPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("张三---promise")
      }, 1000);
    })
  }

  //RxJS方式
  getObservable() {
    return new Observable(observer => {
      var userName = "xiao ming----rxjs";

      setTimeout(() => {
        observer.next(userName);
      }, 2000);
    })
  }

  getRxIntervalData() {
    return new Observable(observer => {
      var count = 0;
      var userName = "xiao ming----interval     ";
      setInterval(() => {
        count++;
        observer.next(userName + count + "");
      }, 1000);
    })
  }
}
