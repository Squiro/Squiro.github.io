import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GUIRoutingModule } from './gui-routing.module';
import { GUIHomeComponent } from './home/gui-home.component';
import { SharedModule } from '../../shared/shared.module';
import { GUIAboutMeComponent } from './about-me/about-me.component';
import { GUIAboutSiteComponent } from './about-site/about-site.component';
import { GUIExperienceComponent } from './experience/experience.component';
import { GUIEducationComponent } from './education/education.component';
import { GUIProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    GUIHomeComponent,
    GUIAboutMeComponent,
    GUIAboutSiteComponent,
    GUIExperienceComponent,
    GUIEducationComponent,
    GUIProjectsComponent
  ],
  imports: [
    CommonModule,    
    GUIRoutingModule,
    SharedModule

  ],
  providers: [],
  bootstrap: []
})
export class GUIModule { }
