import { Component, OnInit } from '@angular/core';

//Service
import { UserService } from '../../../services/user.service'
//User Model
import { User } from '../../../models/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

usersList!: User[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers()
      .snapshotChanges()          //Nos trae todos los cambios que ocurran en la BD 
      .subscribe(item => {        //Nos trae los items en ls BD
        this.usersList = [];      //Primero lo dejo vacio
        item.forEach(element => { //Ahora lo llenamos
          console.log(element);
          let x = element.payload.toJSON();
          console.log(element.key);
          //x["key"] = element.key;
          //const _getKeyValue_ = (key: string) => (x: Record<string, any>) => x[key];
          let a = x as User;
          let b = String(element.key);
          a.key = b;
          this.usersList.push(a);
        })
      })
  }
  onEdit(user: User){
    console.log(user);
  }

  onDelete(mykey: string){
    console.log(mykey);
  }

}
