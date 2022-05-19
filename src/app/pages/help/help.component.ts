import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../shared/components/base-component/base.component';
import { Store } from '@ngxs/store';

@Component({
    selector: 'app-help',
    templateUrl: './help.component.html',
    styleUrls: ['./help.component.scss']
})
export class HelpComponent extends BaseComponent {
    constructor(store: Store) { 
        super(store);        
        this.addComponentString([
            'Commands:', 
            `--> help, h, ?: shows this list`,  
            `--> ls: show directory list`, 
            `--> cd <directory_name>: access directory`,
            `--> show: shows current directory contents (useful if you cleared the screen)`,  
            `--> clear: clears the screen`,
            `--> startx: start GUI`,
            `--> kill: please don't`
        ]);

    }
}
