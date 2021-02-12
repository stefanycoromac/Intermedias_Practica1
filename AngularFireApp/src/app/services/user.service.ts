import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';

import { User } from '../models/user';
import { Usr } from '../models/usr';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList!: AngularFireList<any>;

  selectedUser: User = new User();

  constructor(private firebase: AngularFireDatabase) { }

  getUsers(){
    return this.userList = this.firebase.list('users');
  }

  insertUser(user: User){
    console.log("Insert")
    console.log(user)
    this.userList.push({
      email: user.email,
      password: user.password,
      name: user.name
    });
  }

  updateUser(user: User){
    this.userList.update(user.email, {
      password: user.password,
      name: user.name
    });
  }

  deleteUser($email: string){
    this.userList.remove($email);
  }
}
