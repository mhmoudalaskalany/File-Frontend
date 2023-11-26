import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarToggleService } from '../../services/sidebar-toggle/sidebar-toggle.service';

interface SidebarDefault {
  label: string;
  icon?: string;
  svgIcon?: string;
  routerLinkName: string;
  permissions?: string[];
}
interface SidebarItem extends SidebarDefault {
  children?: SidebarDefault[];
}

@Component({
  selector: 'app-sidebar-list-item',
  templateUrl: './sidebar-list-item.component.html',
  styleUrls: ['./sidebar-list-item.component.scss']
})
export class SidebarListItemComponent implements OnInit {
  showContent = false;
  isSidebarOpened = false;

  @Input() sidebarItem!: SidebarItem;

  constructor(private sidebarService: SidebarToggleService, private router: Router) {}

  ngOnInit(): void {
    this.sidebarService.isSidebarOpened$.subscribe(isSidebarOpened => (this.isSidebarOpened = isSidebarOpened));
  }

  collapse(children: SidebarItem['children']) {
    if (children) (this.showContent = !this.showContent), this.showCollapsed();
  }

  showCollapsed() {
    setTimeout(() => {
      const accordions = document.querySelectorAll('.collapse-wrapper');

      const openAccordion = (accordion: any) => {
        accordion.style.height = accordion.scrollHeight + 'px';
      };

      const closeAccordion = (accordion: any) => {
        accordion.style.height = '0';
      };

      accordions.forEach(accordion => {
        const showContent = accordion.querySelector('.showContent');
        const content = accordion.querySelector('.nested-items');

        if (showContent) {
          openAccordion(showContent);
        } else {
          if (content) closeAccordion(content);
        }
      });
    });
  }

  navigate(sidebarItem: SidebarItem) {
    if (!sidebarItem.children) this.router.navigateByUrl(sidebarItem.routerLinkName);
  }

  isRouteActive(routerLinkName: string) {
    return this.router.isActive(routerLinkName, false);
  }
}
