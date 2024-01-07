import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent {
  idUser! : number;
  icon! : String
  firstName! : String
  lastName! : String
  email! : String

  addUser(params:any) {
    
  }
}
