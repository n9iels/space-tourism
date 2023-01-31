import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsiveContainerComponent } from './components/responsive-container/responsive-container.component';
import { MarketingButtonComponent } from './components/marketing-button/marketing-button.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ResponsiveContainerComponent, MarketingButtonComponent],
  imports: [CommonModule, RouterModule],
  exports: [ResponsiveContainerComponent, MarketingButtonComponent],
})
export class SharedModule {}
