import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {MaterialModules} from './material-module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LottoComponent } from './lotto/lotto.component';
import { VikinglottoComponent } from './vikinglotto/vikinglotto.component';
import { PicklotteryComponent } from './picklottery/picklottery.component';
import { EastereggComponent } from './easteregg/easteregg.component';
const appRoutes: Routes = [
 
  { path: 'easteregg', component: EastereggComponent },
 

]

@NgModule({
  declarations: [
    AppComponent,
    LottoComponent,
    VikinglottoComponent,
    PicklotteryComponent,
    EastereggComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModules,
    RouterModule.forRoot(
      appRoutes,
    ),
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
