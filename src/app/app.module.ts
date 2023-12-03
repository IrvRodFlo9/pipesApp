import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

import { registerLocaleData } from '@angular/common';
import localEsMX from '@angular/common/locales/es';
import localFrCA from '@angular/common/locales/fr';

registerLocaleData(localEsMX);
registerLocaleData(localFrCA);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-MX',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
