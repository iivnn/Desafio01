import { Component, OnInit } from '@angular/core';
import User from 'src/app/models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  users: any[] = [];
  page = 1;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsersSubject.subscribe(data =>{
      this.users = data;
    })

    this.userService.addUsersSubject.subscribe(data =>{
      this.users.push(data);
    })

    this.userService.updateUsersSubject.subscribe(data =>{
      let index = this.users.findIndex(u => u.id === data.id);
      this.users[index] = data
    })

    this.userService.deleteUserSubject.subscribe(data =>{
      let index = this.users.findIndex(u => u.id === data);
      this.users.splice(index, 1);
    })

    this.userService.erroSubject.subscribe(data =>{
      console.log(data);
    })

    this.userService.wsGetUsers();
  }

  editarButtonClick(user: User){
    this.userService.setSelectedUser(user);
  }

  excluirButtonClick(id: number){
    this.userService.wsDeleteUser(id);
  }

  getUsersByPagination(){
    var users = this.users.slice((this.page-1) * 12, this.page * 12);
    var fillAmount = 12 - users.length;
    for(let x = 0; x < fillAmount; x++){
      users.push(new User())
    }
    return users;
  }

  getPaginationCount(){
    if(this.users.length%12 > 0)
      return Array.from({length: this.users.length/12 + 1}, (v, k) => k + 1);
    return Array.from({length: this.users.length/12}, (v, k) => k + 1);
  }

  onPaginationChange(page: number){
    this.page = page;
  }
}
