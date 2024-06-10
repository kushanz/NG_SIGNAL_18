import { Component, computed, inject, input, signal } from '@angular/core';
import { VehiclesService } from '../services/vehicles.service';
import { EMPTY, catchError, filter } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop'

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  searchFilter = signal('')
  private vehicleSesvice = inject(VehiclesService)
  vehiclesList$ = this.vehicleSesvice.getvehicles$.pipe(
    catchError(err => {
      return EMPTY
    }))
    vehicleListSignal = this.vehicleSesvice.getVehiclesSignal
    constructor() {

    }
    filteredVehicleSignal = computed(() => this.vehicleListSignal().filter(v => v.name.toLocaleLowerCase().includes(this.searchFilter().toLocaleLowerCase())) )

}
