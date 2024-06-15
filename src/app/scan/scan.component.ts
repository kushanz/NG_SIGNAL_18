import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { fromEvent, scan } from 'rxjs';

@Component({
  selector: 'app-scan',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scan.component.html',
  styleUrl: './scan.component.css'
})
export class ScanComponent {

  clicks$ = fromEvent<PointerEvent>(document,'click').pipe(
    scan((state:PointerEvent[],event) => [...state,event], [] )
  )
}
