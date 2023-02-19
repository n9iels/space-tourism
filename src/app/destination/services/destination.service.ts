import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Content } from '../../shared/models';

@Injectable({ providedIn: 'root' })
export class DestinationService {
  constructor(private readonly http: HttpClient) {}

  getDestinations() {
    return this.http
      .get<Content>('assets/data.json')
      .pipe(map((data) => data.destinations));
  }
}
