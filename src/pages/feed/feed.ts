import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  public nome_usuario: string = "Natal";  // criando variavel publica com tipo string e valor "Natal"
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public somaDoisNumeros(): void{							// criando uma Funcao que nao retorna nada
  	alert(5+10);
  }

  public funcParametro(num1:number, num2:number): void{ // funcao com parametros!
  	alert(num1 + num2);
  } 


  ionViewDidLoad() {										//ciclo de vida carrega sempre quando a VIEW for executada
    //this.somaDoisNumeros();
    //this.funcParametro(10,90);
  }

}
