import { Component, Input } from '@angular/core';
import { TableValue } from '../models/table';

@Component({
  selector: 'app-table-info',
  templateUrl: './table-info.component.html',
  styleUrls: ['./table-info.component.css'],
})
export class TableInfoComponent {
  @Input() finalTableValues: TableValue = [];
  @Input() displayedColumns: string[] = [
    'dayNumber',
    'date',
    'currencyValue',
    'percentVariationByDay',
    'percentVariationFromDayOne',
  ];
}
