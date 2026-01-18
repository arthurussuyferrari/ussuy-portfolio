import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './header.html',
  styleUrls: ['./header.less'], 
})
export class Header { 
  items = [
    { label: 'Home', icon: 'pi pi-home', routerLink: '/' },
    { label: 'Sobre', icon: 'pi pi-user', routerLink: '/about' },
    { label: 'Projetos', icon: 'pi pi-briefcase', routerLink: '/projects' },
    { label: 'Contato', icon: 'pi pi-envelope', routerLink: '/contact' }
  ];
}
