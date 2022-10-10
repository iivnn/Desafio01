export default class User{
  public id: number = 0;
  public nome: string = '';
  public sobrenome: string = '';
  public email: string = '';
  public dataNascimento: string = '';
  public escolaridade: number = 0;

  public escolaridadeString(){
    switch(this.escolaridade){
      case 0: return 'Nenhum';
      case 1: return 'Infantil';
      case 2: return 'Fundamental';
      case 3: return 'Medio';
      case 4: return 'Superior';
      default: return '';
    }
  }

}
