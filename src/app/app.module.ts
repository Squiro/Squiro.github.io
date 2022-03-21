import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from './shared/shared.module';
import { HelpComponent } from './pages/help/help.component';
import { DirectoriesComponent } from './pages/directories/directories.component';
import { AppStoreModule } from './store/store.module';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ErrorComponent } from './pages/error/error.component';
import { EducationComponent } from './pages/education/education.component';
import { KillComponent } from './pages/kill/kill.component';
import { ProgrammingComponent } from './pages/projects/programming/programming.component';
import { ArduinoComponent } from './pages/projects/arduino/arduino.component';
import { GamesComponent } from './pages/projects/games/games.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HelpComponent,
    DirectoriesComponent,
    ErrorComponent,
    AboutMeComponent,
    ExperienceComponent,
    EducationComponent,
    KillComponent,
    ProgrammingComponent,
    ArduinoComponent,
    GamesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AppStoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
