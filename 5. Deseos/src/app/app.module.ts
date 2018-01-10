import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//Components
import { PendientesPage } from '../pages/pendientes/pendientes';
import { AgregarPage } from '../pages/agregar/agregar';
import { TerminadosPage } from '../pages/terminados/terminados';
import { TabsPage } from '../pages/tabs/tabs';
import { DetallePage } from '../pages/detalle/detalle';


//Servicios
import { ListaDeseosProvider } from '../providers/lista-deseos/lista-deseos';

//Pipes
import { PlaceholderPipe } from '../pipes/placeholder/placeholder';
import { ListaPipe } from '../pipes/lista/lista';

@NgModule({
  declarations: [
    MyApp,
    PendientesPage,
    TerminadosPage,
    AgregarPage,
    PlaceholderPipe,
    ListaPipe,
    DetallePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PendientesPage,
    TerminadosPage,
    AgregarPage,
    DetallePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ListaDeseosProvider,
    ListaDeseosProvider
  ]
})
export class AppModule {}
