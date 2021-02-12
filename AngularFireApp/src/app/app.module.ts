import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';

// FIREBASE
import { environment } from '../environments/environment' //Importamos la configuracion
import { AngularFireModule } from 'angularfire2'; //Este modulo utiliza la configuracion
import { AngularFireDatabaseModule } from 'angularfire2/database';

//Components
import { UsersComponent } from './components/users/users.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { UserComponent } from './components/users/user/user.component' //Con esto podremos utilizar la base datos de firebase conectada a Angular
//Services
import { UserService } from './services/user.service'

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsersListComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    //FIREBASE
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [
    UserService   //Required service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
