import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrollIndicator();
  }

  scrollIndicator() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scrollTop / windowHeight) * 100;

    // Update the width of the scrollIndicator
    const indicator = document.getElementById("scrollIndicator");
    if (indicator) {
      indicator.style.width = scrolled + "%";
    }
  }
}