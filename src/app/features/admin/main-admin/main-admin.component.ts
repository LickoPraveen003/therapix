import { Component } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-main-admin',
  templateUrl: './main-admin.component.html',
  styleUrls: ['./main-admin.component.css']
})
export class MainAdminComponent {
  menuItems: any[] = [];
  isSidebarCollapsed = false;  // Track whether the sidebar is collapsed or not

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.menuService.getMenu().subscribe((data: any) => {
      this.menuItems = data.menuItems;
      this.menuItems.forEach(item => {
        item.isCollapsed = true;  // Initially, all submenus are collapsed
      });
    });
  }

  toggleSidebar(): void {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
    console.log("isSidebarCollapsed", this.isSidebarCollapsed);
  }

  // Toggle the submenu state (collapsed or expanded)
  toggleSubMenu(item: any): void {
    this.menuItems.forEach(i => {
      if (i !== item) i.isCollapsed = true; // Close other submenus
    });
    item.isCollapsed = !item.isCollapsed;  // Toggle the clicked one
    console.log("item.isCollapsed", item.isCollapsed)
  }
}
