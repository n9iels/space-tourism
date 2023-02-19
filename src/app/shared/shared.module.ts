import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsiveContainerComponent } from './components/responsive-container/responsive-container.component';
import { MarketingButtonComponent } from './components/marketing-button/marketing-button.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { TabsComponent } from './components/tabs/tabs.component';

@NgModule({
  declarations: [
    ResponsiveContainerComponent,
    MarketingButtonComponent,
    HeaderComponent,
    TabsComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    ResponsiveContainerComponent,
    MarketingButtonComponent,
    HeaderComponent,
    TabsComponent,
  ],
})
export class SharedModule {}
