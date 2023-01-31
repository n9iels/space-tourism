import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationStart, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
  private readonly onDestory$ = new Subject();

  constructor(private readonly router: Router) {}

  ngOnInit(): void {
    this.router.events.pipe(takeUntil(this.onDestory$)).subscribe((route) => {
      if (route instanceof ActivationStart) {
        document.body.classList.value = route.snapshot.data['rootClass'];
      }
    });
  }

  ngOnDestroy(): void {
    this.onDestory$.next(true);
    this.onDestory$.complete();
  }
}
