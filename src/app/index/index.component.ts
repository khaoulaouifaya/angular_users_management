import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { CommonModule } from '@angular/common';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

  constructor(private userService: UsersService){}

  ngOnInit() {
    this.userService.deleteItem
  }

  data = this.userService.data;

  editItem(item: any) {
    this.userService.deleteItem(item);
    console.log('Edit item:', item);
  }

  deleteItem(item: number) {
    this.data = this.userService.deleteItem(item);
    console.log('Delete item:', item);
  }

}
