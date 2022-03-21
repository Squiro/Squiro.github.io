import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../shared/components/base-component/base.component';
import { Store } from '@ngxs/store';

@Component({
    selector: 'app-about-me',
    templateUrl: './about-me.component.html',
    styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent extends BaseComponent {
    constructor(store: Store) { 
        super(store); 
        this.addComponentString(
            [
                'Basic info:', 
                '(Very soon to be a) Computer Science Engineer. Currently working as a Full Stack Web Developer, but not all my projects revolve around that.',
                `I standout for my ability to solve problems. I'm constantly in the pursuit of new knowledge and techniques that I can acquire, learn, and put to test on my working field.`,
                'I make all my solutions, projects and work focusing on quality, always placing myself on the side of the end user.',
                'Relevant links:',
                'Github',
                '|',
                'LinkedIn',
                '|',
                'Profile at NASA',                
            ])
    }    
}
