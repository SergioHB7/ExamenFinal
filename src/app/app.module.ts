import { BrowserModule } from '@angular/platform-browser';

import { ErrorHandler, NgModule } from '@angular/core';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { SplashScreen } from '@ionic-native/splash-screen';

import { StatusBar } from '@ionic-native/status-bar';



import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';

import { PrincipalPage } from '../pages/principal/principal';

import { CarritoPage } from '../pages/carrito/carrito';

import { RegistroPage } from '../pages/registro/registro';

import { ProductoPage } from '../pages/producto/producto';

import { IonicStorageModule } from '@ionic/storage';



@NgModule({

  declarations: [

    MyApp,

    HomePage,

    PrincipalPage,

    CarritoPage,

    RegistroPage,

    ProductoPage

  ],

  imports: [

    BrowserModule,

    IonicModule.forRoot(MyApp),

    IonicStorageModule.forRoot()

  ],

  bootstrap: [IonicApp],

  entryComponents: [

    MyApp,

    HomePage,

    PrincipalPage,

    CarritoPage,

    RegistroPage,

    ProductoPage

  ],

  providers: [

    StatusBar,

    SplashScreen,

    {provide: ErrorHandler, useClass: IonicErrorHandler}

  ]

})

export class AppModule {}