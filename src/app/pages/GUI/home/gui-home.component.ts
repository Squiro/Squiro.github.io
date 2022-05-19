import { animate, AnimationBuilder, AnimationPlayer, style } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

export interface IGUITabButton {
    id: number;
    selected: boolean;
    displayName: string;
}

@Component({
    selector: 'app-gui-home',
    templateUrl: './gui-home.component.html',
    styleUrls: ['./gui-home.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class GUIHomeComponent implements AfterViewInit {
  splashScreenEl: any;
  player: AnimationPlayer;
  tabs: IGUITabButton[] = [
    {
        id: 0,
        selected: true,
        displayName: 'About me'

    },
    {
        id: 1,
        selected: false,
        displayName: 'Experience'

    },
    {
        id: 2,
        selected: false,
        displayName: 'Education'

    },
    {
        id: 3,
        selected: false,
        displayName: 'Projects'

    },
    {
        id: 4,
        selected: false,
        displayName: 'About this site'

    },
  ];

  // Inject document which is safe when used with server-side rendering
  constructor(@Inject(DOCUMENT) private document: Document, private _animationBuilder: AnimationBuilder,) {
    // Add the current (light) theme as a default
    this.document.body.classList.add("m-0");
    
  }

  ngAfterViewInit(): void {
    this.splashScreenEl = this.document.body.querySelector('#splash-screen');    
    // this.hide();
    setTimeout(() => {
      this.hide();
    }, 5000);
    
  }

   /**
     * Show the splash screen
     */
    show(): void
    {
        this.player =
            this._animationBuilder
                .build([
                    style({
                        opacity: '0',
                        zIndex : '99999'
                    }),
                    animate('400ms ease', style({opacity: '1'}))
                ]).create(this.splashScreenEl);

        setTimeout(() => {
            this.player.play();
        }, 0);
    }

    /**
     * Hide the splash screen
     */
    hide(): void
    {
        this.player =
            this._animationBuilder
                .build([
                    style({opacity: '1'}),
                    animate('1000ms ease', style({
                        opacity: '0',
                        zIndex : '-10'
                    }))
                ]).create(this.splashScreenEl);

        setTimeout(() => {
            this.player.play();
        }, 0);
    }

    onTabClick(tabId: number): void {
        for (const tab of this.tabs) 
        {
            tab.selected = false;            
            if (tab.id == tabId)
                tab.selected = true;
        }
    }  
}
