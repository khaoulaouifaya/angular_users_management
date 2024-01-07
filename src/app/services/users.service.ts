// index.service.ts
import { Injectable } from '@angular/core';
import { User } from '../models/User';


@Injectable({
  providedIn: 'root',
})
export class UsersService {
 data: User[] = [
        { idUser: 1, icon: './assets/img/men.jpeg', firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com' },
        { idUser: 2, icon: './assets/img/men1.jpeg', firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com' },
        { idUser: 3, icon: './assets/img/men3.jpeg', firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com' },
        { idUser: 4, icon: './assets/img/men.jpeg', firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com' },
        { idUser: 5, icon: './assets/img/men1.jpeg', firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com' },
        { idUser: 6, icon: './assets/img/men3.jpeg', firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com' },
        { idUser: 7, icon: './assets/img/men.jpeg', firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com' },
        { idUser: 8, icon: './assets/img/men1.jpeg', firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com' },
        { idUser: 9, icon: './assets/img/men3.jpeg', firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com' },
        { idUser: 10, icon: './assets/img/men.jpeg', firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com' },
        { idUser: 11, icon: './assets/img/men1.jpeg', firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com' },
      ];

  addUser(user: any) {
    this.data.push(user);
  }

  deleteItem(itemId: number) {
    this.data = this.data.filter(element => element.idUser !== itemId);
    return this.data ;
  }

  updateItem(user: User){
    var userResult = this.data.find(element => element.idUser === user.idUser);
    if(userResult){
      userResult.firstName = user.firstName
      userResult.lastName = user.lastName
      console.log("user result" , userResult);
    }
  }

  
}