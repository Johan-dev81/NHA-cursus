import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { HomePageComponent } from './home-page/home-page.component';
import { StoreModule } from '@ngrx/store';
import { locationReducer } from './location-reducer';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FormsModule } from '@angular/forms';
import { WeatherService } from './weather.service';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { HttpClientModule } from '@angular/common/http';

import { CampingComponent } from './camping.component';
import { CampingInvoerComponent } from './campinginvoer.component';
import { CampingRegistratieInvoerComponent } from 'src/registratie/registratie.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ChildService } from './child/child.service';
import { Child2Component } from './child2/child2.component';
import { Child2aComponent } from './menu/child2a/child2a.component';
import { Child2bComponent } from './menu/child2b/child2b.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
     CampingComponent,
      CampingInvoerComponent,
       CampingRegistratieInvoerComponent,
        ParentComponent,
         ChildComponent, 
         Child2Component, 
         Child2aComponent,
          Child2bComponent,
           FooterComponent,
            CurrentWeatherComponent,
             HomePageComponent, 
             TopBarComponent,

  ],
  imports: [
    BrowserModule,
     FormsModule,
      AppRoutingModule,
       BrowserAnimationsModule,
      //  MatButtonModule,
    MatToolbarModule,
   StoreModule.forRoot({
      loc: locationReducer
    }),
      ],
  providers: [ChildService],
  bootstrap: [AppComponent]
})
export class AppModule { }
