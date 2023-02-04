import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(private readonly router: Router) {}

  get navigation() {
    return [
      { title: 'Home', link: '/' },
      { title: 'Destination', link: '/destination' },
      { title: 'Crew', link: '/crew' },
      { title: 'Technology', link: '/technology' },
    ];
  }

  isActiveRoute(link: string) {
    return this.router.url === link;
  }
}
