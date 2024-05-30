import { Component, computed, inject, signal } from '@angular/core';
import { VehiclesService } from '../services/vehicles.service';
import { EMPTY, catchError } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  public a = signal(10)
  public b = signal(10)
  public c = computed(() => Number(this.a()) + Number(this.b()))

  onChange($event:any) {
    this.a.set($event.value)
  }
  private vehicleSesvice = inject(VehiclesService)
  vehiclesList$ = this.vehicleSesvice.getvehicles$.pipe(
    catchError(err => {
      return EMPTY
    }))
}
