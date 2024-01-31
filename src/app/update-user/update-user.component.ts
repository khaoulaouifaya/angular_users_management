import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UsersService } from '../services/users.service';
import { User } from '../models/User';
@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent {

  user: User;
  userId: any ;
  result:any;

  constructor(private userService: UsersService,private route:ActivatedRoute, private router: Router){
    this.userId = this.route.snapshot.paramMap.get('id');
    this.result = this.userService.findUser(this.userId);
    this.user = new User(
      this.userId,
      this.result?.icon,
      this.result?.firstName,
      this.result?.lastName,
      this.result?.email);
  }


  updateUser(user: User){
    this.user = new User(
      user.idUser,
      user.icon,
      user.firstName,
      user.lastName,
      user.email);
    this.userService.updateItem(this.user);
    this.router.navigate(['']);
  }

}
