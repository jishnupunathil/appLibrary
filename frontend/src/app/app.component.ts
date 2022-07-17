import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'library';
  @HostListener('window:unload', ['$event'])
  async unloadHandler(event:any) {
    if (event.currentTarget.performance.navigation.type !== PerformanceNavigation.TYPE_RELOAD) {
      localStorage.clear();
    }
  }
}
