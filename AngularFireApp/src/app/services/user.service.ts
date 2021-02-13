import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';

import { User } from '../models/user';

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
    this.userList.push({
      //autokey: "quemado",
      email: user.email,
      password: user.password,
      name: user.name
    });
  }

  updateUser(user: User){
    this.userList.update(user.key, {
      email: user.email,
      password: user.password,
      name: user.name
    });
  }

  deleteUser(key: string){
    this.userList.remove(key);
  }
}
