import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarToggleService } from 'core/services/sidebar-toggle/sidebar-toggle.service';
import { TranslationService } from 'core/services/translation/translation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isEnglish = true;
  lang = '';
  constructor(public translateService: TranslationService, private router: Router, private sidebarService: SidebarToggleService) {}

  ngOnInit(): void {
    this.translateService.currentLanguage$.subscribe(lang => (this.lang = lang));
  }

  sidebarToggle = () => {
    this.sidebarService.toggle();
  };

  changeLanguage = () => {
    this.translateService.changeLanguage();
  };

  logOut = () => {
    localStorage.clear();
    this.router.navigate(['/']);
  };
}
