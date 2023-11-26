import { Component, OnInit } from '@angular/core';
import { SidebarToggleService } from 'core/services/sidebar-toggle/sidebar-toggle.service';

interface SidebarDefault {
  label: string;
  routerLinkName: string;
  icon?: string;
  svgIcon?: string;
  permissions?: string[];
}
interface Sidebar extends SidebarDefault {
  children?: SidebarDefault[];
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  user: any;
  isSidebarOpened = false;
  sidebarItems: Sidebar[] = [
    {
      label: 'FILE-PROCESSOR.TITLE',
      icon: 'bx bxs-user-badge',
      routerLinkName: '/file-processor'
    }
  ];

  constructor(private sidebarService: SidebarToggleService) {}

  ngOnInit(): void {
    this.sidebarService.isSidebarOpened$.subscribe(isSidebarOpened => (this.isSidebarOpened = isSidebarOpened));
  }

  /**
   * Toggle Side Bar
   */
  sidebarToggle() {
    this.sidebarService.toggle();
  }
}
