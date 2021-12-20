import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  //将数据写入 localStorage
  set(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  get(key: string): any {
    var result = localStorage.getItem(key);
    if (result == null) return null;
    return JSON.parse(<string>localStorage.getItem(key));
  }

  remove(key: string): void {
    localStorage.removeItem(key);
  }
}
