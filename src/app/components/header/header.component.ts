import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenubarModule, BadgeModule, AvatarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Proyectos',
        icon: 'pi pi-briefcase',
        href: '/projects',
      },
      {
        label: 'Tareas',
        icon: 'pi pi-list-check',
        href: '/tasks',
      },
      {
        label: 'Usuarios',
        icon: 'pi pi-users',
        href: '/users',
      },
    ];
  }

  signOut() {
    sessionStorage.clear();
    window.location.href = '/';
  }

}
