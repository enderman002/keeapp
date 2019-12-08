import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PhoneBookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phone-book',
  templateUrl: 'phone-book.html',
})
export class PhoneBookPage {

  contactArray = [{name: 'Moss', telephone: '0811111111', imageUrl: 'assets/imgs/boy1.JPG'}
                  ,{name: 'Tid', telephone: '0822222222', imageUrl: 'assets/imgs/boy2.jpg'}
                  ,{name: 'Ray', telephone: '0833333333', imageUrl: 'assets/imgs/boy3.jpg'}
                  ,{name: 'Kee', telephone: '0844444444', imageUrl: 'assets/imgs/boy4.jpg'}
                ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneBookPage');
  }

}//end class
