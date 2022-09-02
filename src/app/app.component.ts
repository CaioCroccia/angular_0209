import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Interpolação Angular App';
  nascimento = 20;
 
  //O que é declarado dentro da classe é possivel usar no component hmtl


getIdade(){
  return 2022 - this.nascimento;
  };
}

