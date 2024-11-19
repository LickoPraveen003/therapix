import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.css']
})
export class DashboardHeaderComponent {
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
}
