import { Component, OnInit } from '@angular/core';
import { fairyDustCursor } from 'cursor-effects';
@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css'
})
export class HelloComponent implements OnInit {
  ngOnInit() {
     fairyDustCursor({
      colors: ['#e92efb', 'white', '#c180ee'] // Tu peux personnaliser les couleurs ici
    });
  }
  downloadPdf() {
    const link = document.createElement('a');
    link.href = 'Slimen__Eya_CV.pdf'; 
    link.download = 'Slimen__Eya_CV.pdf'; 
    link.click();
  }
}
