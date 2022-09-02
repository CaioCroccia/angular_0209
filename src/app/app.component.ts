import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  nascimento = 2022;
 
  //O que é declarado dentro da classe é possivel usar no component hmtl
}


