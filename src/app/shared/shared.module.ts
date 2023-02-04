import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsiveContainerComponent } from './components/responsive-container/responsive-container.component';
import { MarketingButtonComponent } from './components/marketing-button/marketing-button.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    ResponsiveContainerComponent,
    MarketingButtonComponent,
    HeaderComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    ResponsiveContainerComponent,
    MarketingButtonComponent,
    HeaderComponent,
  ],
})
export class SharedModule {}
