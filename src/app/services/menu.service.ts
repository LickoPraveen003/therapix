import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface MenuItem {
  label: string;
  icon: string;
  link: string;
  subMenu: { label: string, link: string }[];
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menuUrl = 'assets/menu.json'; // Path to your menu.json file

  constructor(private http: HttpClient) { }

  getMenu(): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(this.menuUrl);
  }
}
