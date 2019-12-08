import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginResult;

  constructor(public navCtrl: NavController) {
  }//end class

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  signIn(i_username,i_password){
    alert("Hello world "+i_username+" "+i_password);
    if (i_password == '1234') {
      this.loginResult = "wellcome "+i_username;
      this.navCtrl.push("PhoneBookPage");
    } else {
      this.loginResult = "Failed!! ลองใหม่อีกครั้ง"
    }
  }
}//end class
