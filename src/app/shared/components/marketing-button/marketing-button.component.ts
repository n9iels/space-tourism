import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-marketing-button[label][link]',
  templateUrl: './marketing-button.component.html',
})
export class MarketingButtonComponent {
  @Input()
  label!: string;

  @Input()
  link!: string;
}
