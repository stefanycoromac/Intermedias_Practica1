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
      .snapshotChanges()                  //Nos trae todos los cambios que ocurran en la BD 
      .subscribe(item => {                //Nos trae los items en ls BD
        this.usersList = [];              //Primero lo dejo vacio
        item.forEach(element => {         //Ahora lo llenamos
          
          let x = element.payload.toJSON();

          //x["key"] = element.key;           //Codigo original, pero genera error
                                              /*Una solucion:*/
          let actualUser = x as User;         //Casteamos x como User y lo almacenamos
          let firebkey = String(element.key); //Casteamos la  a String para evitar pueda tomar el valor null
          actualUser.key = firebkey;          //Guardamos la llave que nos devuelve firebase en el atributo key del usuario

          this.usersList.push(actualUser);
        })
      })
  }
  onEdit(user: User){
    this.userService.selectedUser = Object.assign({}, user);
  }

  onDelete(mykey: string){
    this.userService.deleteUser(mykey);
  }

}
