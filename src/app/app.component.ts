import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private readonly titleService: Title=inject(Title);

  title = 'getMgaddar';

  ngOnInit() {
    this.titleService.setTitle(this.title);
  }
 
 
}
