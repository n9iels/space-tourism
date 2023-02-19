import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Destination } from 'src/app/shared/models';
import { DestinationService } from '../services/destination.service';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
})
export class DestinationComponent implements OnInit {
  destinations$: Observable<Destination[]> = of();

  constructor(private readonly destinationService: DestinationService) {}

  ngOnInit(): void {
    this.destinations$ = this.destinationService.getDestinations();
  }

  typedDestination(destination: any) {
    return destination as Destination;
  }
}
