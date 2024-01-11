import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { CommonModule } from '@angular/common';
import { User } from '../models/User';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

  constructor(private userService: UsersService, private router:Router){}

  ngOnInit() {
    this.userService.deleteItem
    this.userService.updateItem
  }

  data = this.userService.data;

  updateUser(userId: number) {
    let user= this.data.find(element=> element.idUser == userId)
    this.router.navigate(['/update'])
  }

  deleteItem(item: number) {
    this.data = this.userService.deleteItem(item);
    console.log('Delete item:', item);
  }

}
