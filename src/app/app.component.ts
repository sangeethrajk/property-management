import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'property-management';
  showHead: boolean = false;
  showDash: boolean = false;

  constructor(private router: Router) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event['url'] == '/') {
          this.showHead = false;
          this.showDash = false;
        } else {
          this.showHead = true;
          this.showDash = true;
        }
      }
    });
}


}
