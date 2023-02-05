import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinationComponent } from './components/destination.component';

const routes: Routes = [
  {
    path: '',
    component: DestinationComponent,
    title: 'Destination',
    data: { rootClass: 'destination' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DestinationRoutingModule {}
