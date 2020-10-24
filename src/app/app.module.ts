import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';

import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NavBarComponent } from './global-components/nav-bar/nav-bar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DevelopmentPageComponent } from './pages/development-page/development-page.component';
import { DesignPageComponent } from './pages/design-page/design-page.component';
import { PortfolioHeaderComponent } from './page-components/portfolio-header/portfolio-header.component';
import { DevelopmentEntryComponent } from './page-components/development-entry/development-entry.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'development', component: DevelopmentPageComponent },
  { path: 'design', component: DesignPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    DevelopmentPageComponent,
    DesignPageComponent,
    PortfolioHeaderComponent,
    DevelopmentEntryComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
