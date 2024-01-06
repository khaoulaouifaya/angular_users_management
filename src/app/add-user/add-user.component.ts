import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IndexComponent } from '../index/index.component';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [RouterLink, FormsModule , IndexComponent],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
   userId: any;
   firstName!: any;
   lastName!: any;
   email!: any;

   addUser(params:any) {
    
   }

   

}
