import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  languages = [
    { value: 'en', display: 'Eng' },
    { value: 'es', display: 'Spa' },
    { value: 'fr', display: 'Fre' },
    { value: 'de', display: 'Ger' },
    { value: 'zh', display: 'Chi' },
    { value: 'ja', display: 'Jap' }
  ];

  selectedLanguage = 'en';
  constructor(private router: Router) {}
  bookCall() {
    this.router.navigate(['/therapix/bookcall']);
  }
}
