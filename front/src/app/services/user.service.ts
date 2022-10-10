import { Injectable, Output } from '@angular/core';
import axios from 'axios';
import { Subject } from 'rxjs';
import User from 'src/app/models/User';
import { AppToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _user: User | undefined;

  @Output() selectedUserSubject = new Subject<User>();
  @Output() getUsersSubject = new Subject<[]>();
  @Output() addUsersSubject = new Subject<any>();
  @Output() updateUsersSubject = new Subject<any>();
  @Output() deleteUserSubject = new Subject<number>();

  @Output() erroSubject = new Subject<string>();

  constructor(private toastService: AppToastService) { }

  setSelectedUser(user: User){
    this._user = user;
    this.selectedUserSubject.next(this._user);
  }

  wsGetUsers(){
    var x = axios.get('http://localhost:5012/api/User/Get', {})
    .then(r =>{
      this.getUsersSubject.next(r.data)

    })
    .catch(err =>{
      this.toastService.show('Erro', err)
    })
  }

  wsAddUser(data: any){
    var x = axios.post('http://localhost:5012/api/User/Add', data)
    .then(r =>{
      data.id = r.data;
      this.addUsersSubject.next(data);
      this.toastService.show('Sucesso', 'Usuário criado com sucesso!')
    })
    .catch(err => {
      this.toastService.show('Erro', err)
    })
  }

  wsUpdateUser(data: any){
    var x = axios.put('http://localhost:5012/api/User/Update', data)
    .then(r =>{
      this.updateUsersSubject.next(data);
      this.toastService.show('Sucesso', 'Usuário atualizado com sucesso!')
    })
    .catch(err => {
      this.toastService.show('Erro', err)
    })
  }

  wsDeleteUser(id: number){
    var x = axios.delete('http://localhost:5012/api/User/Delete', {
      params: {
        id: id
      }
    })
    .then(r =>{
      this.deleteUserSubject.next(id);
      this.toastService.show('Sucesso', 'Usuário excluido com sucesso!')
    })
    .catch(err => {
      this.toastService.show('Erro', err)
    })
  }

}
