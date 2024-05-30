import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Vehicle, VehicleResponse } from '../interfaces/vehicle.interface';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  private url = 'https://swapi.py4e.com/api/vehicles'
  http = inject(HttpClient)

  getvehicles$ = this.http.get<VehicleResponse>(this.url).pipe(
      map((data) =>  data.results.map((v) => ({...v,cost: isNaN(Number(v.cost_in_credits))
      ? String(Math.random()*100000) : v.cost_in_credits}) as Vehicle))
    )
  
  constructor() { }
}
