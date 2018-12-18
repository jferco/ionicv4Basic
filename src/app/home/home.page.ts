import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  lista=[{avatar:"pablex.jpg",title:"Pablo Matamoros",subtitle:"Conocido como DJ"},
  {avatar:"vitorsh.jpg",title:"Víctor Vargas",subtitle:"El famoso Don Vergas"}];
  constructor() {}

  doRefresh(event) {
    console.log('Empieza a Refrescar');

    setTimeout(() => {
      console.log('Termina de refrescar');
      event.target.complete();
    }, 2000);
  }

}
