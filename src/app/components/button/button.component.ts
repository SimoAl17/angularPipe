import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Output() public userChanged = new EventEmitter<any>();
  @Output() public arrayChanged = new EventEmitter<User[]>();
  @Output() public userAdded = new EventEmitter<User>();

  constructor() { }

  ngOnInit(): void {
    console.log("");
  }

  changeUser() {
    this.userChanged.emit();
  }

  changeArray() {
   const newArray = [
     {name: "Michael", ranking: 3},
     {name: "Francesca", ranking: 1},
     {name: "Nicolò", ranking: 2}];
     this.arrayChanged.emit(newArray);
  }

  addUser() {
    const user: User = {name: "Andrea A.", ranking: 100};
    this.userAdded.emit(user);
  }

}
