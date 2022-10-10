import { IfStmt } from '@angular/compiler';
import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import User from 'src/app/models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.css']
})
export class FormModalComponent implements OnInit{
  public maxDate: string = '';
  user: User | undefined = undefined;

  constructor(private userService: UserService) { }
  id = 0;
  nome = '';
  sobrenome = ''
  email = ''
  dataNascimento = ''
  escolaridade = 0

  ngOnInit(): void {
    this.maxDate = new Date().toISOString().split("T")[0];

    this.userService.selectedUserSubject.subscribe(x => {
      this.id = x.id
      this.nome = x.nome
      this.sobrenome = x.sobrenome
      this.email = x.email
      this.dataNascimento = x.dataNascimento
      this.escolaridade = x.escolaridade
    });
  }

  onSubmit(form: NgForm){
    console.log(form.value)
    if(form.value.id == null || form.value.id == '' || form.value.id == 0){
      form.value.escolaridade = parseInt(form.value.escolaridade)
      this.userService.wsAddUser(form.value)
    }else{
      form.value.escolaridade = parseInt(form.value.escolaridade)
      this.userService.wsUpdateUser(form.value)
    }
    form.resetForm();
  }
}
