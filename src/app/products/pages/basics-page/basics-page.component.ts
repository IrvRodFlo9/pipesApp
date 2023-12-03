import { Component } from '@angular/core';

@Component({
  selector: 'products-basics-page',
  templateUrl: './basics-page.component.html',
  styles: ``,
})
export class BasicsPageComponent {
  public nameLower: string = 'irving';
  public nameUpper: string = 'IRVING';
  public fullName: string = 'iRvIng rOdRIguez';

  public customDate: Date = new Date();
}
