import { Component, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    this.router.navigate(['/update',userId])
  }

  deleteItem(item: number) {
    this.data = this.userService.deleteItem(item);
    console.log('Delete item:', item);
  }

}
