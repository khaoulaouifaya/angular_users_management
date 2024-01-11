import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IndexComponent } from '../index/index.component';
import { UsersService } from '../services/users.service';
import { User } from '../models/User';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [RouterLink, FormsModule , IndexComponent],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
   userId!: any;
   firstName!: any;
   icon!: any;
   lastName!: any;
   email!: any;

   constructor(private userService: UsersService){}

   ngOnInit(){
    this.userService.addUser
   }

   addUser() {
    let user: User = new User(1,this.icon,this.firstName,this.lastName,this.email);
    this.userService.addUser(user);
    this.clear;
   }
   
   clear(){
   this.userId=null;
   this.firstName="";
   this.icon="";
   this.lastName="";
   this.email="";
   }

   

}
