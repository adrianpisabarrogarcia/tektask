import { Component, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { UsersService } from '../../services/users.service';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { Table } from 'primeng/table';
import { SortEvent } from 'primeng/api';
import { RadioButtonModule } from 'primeng/radiobutton';


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    HeaderComponent,
    TableModule,
    RadioButtonModule
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
  providers: [UsersService]
})
export class UsersComponent implements OnInit {
  @ViewChild('dt') dt!: Table;

  products: Product[] = [];

  initialValue: Product[] = [];

  isSorted: boolean = false;

  selectedProduct!: Product;


  constructor(private productService: UsersService) { }

  ngOnInit() {
    this.productService.getProducts().then((data) => {
      this.products = data;
      this.initialValue = [...data];
    });
  }

  customSort(event: SortEvent) {
    if (!this.isSorted) {
      this.isSorted = true;
      this.sortTableData(event);
    } else if (this.isSorted) {
      this.isSorted = false;
      this.sortTableData(event);
    } else {
      this.isSorted = false;
      this.products = [...this.initialValue];
      this.dt.reset();
    }
  }

  sortTableData(event: SortEvent) {
    if (event.data) {
      event.data.sort((data1: Product, data2: Product) => {
        let value1: any = event.field ? data1[event.field] : undefined;
        let value2: any = event.field ? data2[event.field] : undefined;
        let result: number | null = null;
        if (value1 == null && value2 != null) {
          result = -1;
        } else if (value1 != null && value2 == null) {
          result = 1;
        } else if (value1 == null && value2 == null) {
          result = 0;
        } else if (typeof value1 === 'string' && typeof value2 === 'string') {
          result = value1.localeCompare(value2);
        } else {
          const isValue1LessThanValue2 = value1 < value2;
          const isValue1GreaterThanValue2 = value1 > value2;
          if (isValue1LessThanValue2) {
            result = -1;
          } else if (isValue1GreaterThanValue2) {
            result = 1;
          } else {
            result = 0;
          }
        }
        return (event.order ?? 0) * result;
      });
    }
  }
}


export interface Product {
  id?: string;
  code?: string;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  inventoryStatus?: string;
  category?: string;
  image?: string;
  rating?: number;
  [key: string]: any; // Add index signature
}
