import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <mat-card>
      <mat-card-title> 404: Page Not Found </mat-card-title>

      <mat-card-content>
        We couldn't find the page! Not even with x-ray vision.
      </mat-card-content>

      <mat-card-actions>
        <button mat-raised-button color="primary" routerLink="/" class="center">
          Take Me Home
        </button>
      </mat-card-actions>
    </mat-card>
  `,

  styles: [
    `
      :host {
        text-align: center;
      }

      .center {
        margin: 0;
        position: absolute;
        top: 70%;
        left: 50%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
      }
    `,
  ],
})
export class PageNotFoundComponent {}
