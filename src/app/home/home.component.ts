import { Component } from '@angular/core';
import { HelloComponent } from "../hello/hello.component";
import { AboutComponent } from "../about/about.component";
import { SkillsComponent } from "../skills/skills.component";
import { ProjectsComponent } from "../projects/projects.component";
import { ExperiencesComponent } from "../experiences/experiences.component";
import { ContactComponent } from "../contact/contact.component";
import { SocialCompetitionsComponent } from "../social-competitions/social-competitions.component";
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HelloComponent, AboutComponent, SkillsComponent, ProjectsComponent, ExperiencesComponent, ContactComponent, SocialCompetitionsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
