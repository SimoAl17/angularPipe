import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-pipe';

  public users: User[] = [
  ];

  public listData: any = {};

  public titleColor = 'yellow';

  constructor(private http: HttpClient) {
    // this.listData.background = "green";
    // this.listData.usersArray = this.users;
    this.listData = {background: "green", usersArray: this.users};
  }

  ngOnInit(): void {
    this.http.get<User[]>("./assets/users.json").subscribe(users => {
      this.users = users;
      this.listData.usersArray = this.users;
    });
  }

  onUserChanged() {
    this.users[0].name = "Marta";
    console.log("Utente cambiato");
  }

  onArrayChanged(usersArray: User[]) {
    this.users = usersArray;
    this.listData.usersArray = this.users;
    console.log("Array cambiato", usersArray);
  }

  onUserAdded(user: User) {
    this.users.push(user);
    console.log("Utente aggiunto", user);
  }
}
