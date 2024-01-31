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
  
    
      resutl: any;

  addUser(user: User) {
    this.data.push(user);
  }

  findUser(userId: number){
   return this.data.find(user => user.idUser == userId);
  }

  deleteItem(itemId: number) {
    this.data = this.data.filter(element => element.idUser !== itemId);
    return this.data ;
  }

  updateItem(user: User){
    this.resutl = this.findUser(user.idUser);
    this.resutl.firstName = user.firstName;
    this.resutl.lastName = user.lastName;
    this.resutl.email = user.email;
    this.resutl.icon = user.icon;
  }

  
}