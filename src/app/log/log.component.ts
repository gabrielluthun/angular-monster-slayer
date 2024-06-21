import { Component } from '@angular/core';
import { LogService } from '../log.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'log',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './log.component.html',
  styleUrl: './log.component.css'
})
export class LogComponent {
  constructor(public logService: LogService) { }
}
