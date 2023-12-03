import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css',
})
export class UncommonPageComponent {
  /* i18n Select */
  public name: string = 'Irving';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient(): void {
    if (this.name === 'Irving') {
      this.name = 'Melissa';
      this.gender = 'female';
    } else {
      this.name = 'Irving';
      this.gender = 'male';
    }
  }

  /* i18nPlural */
  public clientes: string[] = [
    'Maria',
    'Pedro',
    'Fernando',
    'Eduardo',
    'Melissa',
    'Juan',
  ];

  public clientsMap = {
    '=0': 'No tenemos ningun cliente esperando',
    '=1': 'Tenemos un cliente esperando',
    other: 'Tenemos # clientes esperando',
  };

  deleteCliente(): void {
    this.clientes.shift();
  }

  /* keyValue */

  public person = {
    name: 'Irving',
    age: 22,
    address: 'Tulancigo',
  };

  /* async  */
  public myObservable: Observable<number> = interval(2000);
}
