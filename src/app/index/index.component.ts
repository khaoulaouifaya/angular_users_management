import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

  data = [
    { id: 1, icon: './assets/img/men.jpeg', firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com' },
    { id: 2, icon: './assets/img/men1.jpeg', firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com' },
    { id: 1, icon: './assets/img/men3.jpeg', firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com' },
    { id: 2, icon: './assets/img/men.jpeg', firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com' },
    { id: 1, icon: './assets/img/men1.jpeg', firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com' },
    { id: 2, icon: './assets/img/men3.jpeg', firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com' },
    { id: 2, icon: './assets/img/men.jpeg', firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com' },
    { id: 1, icon: './assets/img/men1.jpeg', firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com' },
    { id: 2, icon: './assets/img/men3.jpeg', firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com' },
    { id: 2, icon: './assets/img/men.jpeg', firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com' },
    { id: 1, icon: './assets/img/men1.jpeg', firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com' },
  ];

  editItem(item: any) {
    // Add logic for editing the item
    console.log('Edit item:', item);
  }

  deleteItem(item: any) {
    // Add logic for deleting the item
    console.log('Delete item:', item);
  }

}
