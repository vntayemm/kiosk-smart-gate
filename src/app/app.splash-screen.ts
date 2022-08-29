import { animate, animateChild, query, style, transition, trigger } from '@angular/animations';
import { ApplicationRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { AppService } from './app.service';

@Component({
  selector: 'app-splash-screen', 
  template: `
    <div class="splash-screen" *ngIf="show" @fadeOut>
        // Your custom splash screen design
    </div>
  `,
  animations: [
    // the fade-in/fade-out animation.
    trigger('fadeOut', [
        transition(':leave', [
            query(':leave', animateChild(), {optional: true}),
            animate(300, style({opacity: 0}))
        ]),
    ]),
  ],
  styles: [`
    .splash-screen {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 9999;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppSplashScreenComponent implements OnInit {

  show = true;

  constructor(
      private appService: AppService,
      private cdr: ChangeDetectorRef,
      private updates: SwUpdate,
      private appRef: ApplicationRef,
  ) {
  }

  ngOnInit() {
      this.appService.checkForUpdate(this.appRef, this.updates)
          .subscribe((result: any) => {
              this.show = result;
              this.cdr.detectChanges();
          });
  }
}
