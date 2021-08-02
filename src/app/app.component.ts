import { Component } from '@angular/core';

import { CallNumber } from '@ionic-native/call-number/ngx';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent  {
  productos:any;

  public appPages = [
    { title: 'Carrito', url: 'carrito', icon: 'cart' },
    { title: 'Home', url: 'home', icon: 'grid' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];


  constructor(private callNumber: CallNumber) {}

  llamar(){
    console.log("Se procede a llamar CAll Center")
    this.callNumber.callNumber("0991269100", true)
  .then(res => console.log('Launched dialer!', res))
  .catch(err => console.log('Error launching dialer', err));
    
  }
}
