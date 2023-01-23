import { Component } from '@angular/core';
import { MenuItem } from './core/models/menu-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Tour of Heroes';
  menuItems: MenuItem[] = [
    {
      icon: 'dashboard',
      routerLink: '/dashboard',
      toolTipText: 'Dashboard',
    },

    {
      icon: 'shield',
      routerLink: '/heroes',
      toolTipText: 'Heroes',
    },
  ];
}
