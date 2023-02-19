import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DestinationRoutingModule } from './destination-routing.module';
import { DestinationComponent } from './components/destination.component';
import { SharedModule } from '../shared/shared.module';
import { DestinationService } from './services/destination.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [DestinationComponent],
  providers: [DestinationService],
  imports: [
    CommonModule,
    DestinationRoutingModule,
    SharedModule,
    HttpClientModule,
  ],
})
export class DestinationModule {}
