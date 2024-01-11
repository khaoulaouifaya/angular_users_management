import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { UsersService } from '../services/users.service';
@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent {

  //@Input() user!: User;
  //userId: any = this.user.idUser;
  //firstName: any= this.user.firstName;
  //icon: any = this.user.icon;
  //lastName: any = this.user.lastName ;
  //email: any = this.user.email;

  userId!: any;
  firstName!: any;
  icon!: any;
  lastName!: any;
  email!: any;

  constructor(private userService: UsersService){}

  ngOnInit(){
   this.userService.updateItem
  }
  updateUser(){

  }

}
