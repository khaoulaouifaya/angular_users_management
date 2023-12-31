import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { CommonModule } from '@angular/common';
import { User } from '../models/User';
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
    this.userService.updateItem
  }

  data = this.userService.data;

  editItem(item: any) {
    this.userService.updateItem(item);
  }

  deleteItem(item: number) {
    this.data = this.userService.deleteItem(item);
    console.log('Delete item:', item);
  }

}
