import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Page2 } from '../page2/page2';

@IonicPage()
@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})

export class Page1 {
  public mensagem :string;
  public nomeUsuario :string;

  constructor(public navCtrl :NavController,
              public navParams :NavParams) {
    this.mensagem = "Oi, ";
    this.nomeUsuario = "Fulano";
  }

  /* Encaminha pra page 2 */
  trocar (){
    this.navCtrl.push(Page2, {
      nomeUsuario :this.nomeUsuario,
      callBack :this.callBack.bind(this)
		});
  }

  callBack (novoNome :string) {
    if (novoNome != "") {
      this.nomeUsuario = novoNome;
      //console.log("Não vazio");
    } else {
      /* Altera mensagem para nome vazio */
      this.nomeUsuario = "";
      this.mensagem = "Oi";
    }
  }
}
