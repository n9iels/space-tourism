import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { Tab } from '../../models';

@Component({
  selector: 'shared-tabs[items]',
  templateUrl: './tabs.component.html',
})
export class TabsComponent<T extends Tab> {
  @ContentChild('right')
  templateRight!: TemplateRef<T>;

  @ContentChild('left')
  templateLeft!: TemplateRef<T>;

  @Input()
  items!: T[];

  activeTab = 0;

  setActiveTab(index: number) {
    this.activeTab = index;
  }
}
