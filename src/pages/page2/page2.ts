import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-page2',
	templateUrl: 'page2.html'
})

export class Page2 {
  public nomeUsuario :string;
  public callBack :any;
  
  constructor(public navCtrl :NavController,
              public navParams :NavParams) {
    this.nomeUsuario = navParams.get("nomeUsuario");
    this.callBack = navParams.get("callBack");
   }
  
  /* Retorna pra page 1 */
  // com nome novo ou nome vazio
  confirmar (novoNome :string){
    this.callBack(novoNome);
    this.navCtrl.pop();
  }
  // com nome novo ou nome vazio
  cancelar(){
    //console.log("Chegou aqui! xD");
    this.navCtrl.pop();
  }
}