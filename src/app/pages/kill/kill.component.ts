import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { BaseComponent } from '../../shared/components/base-component/base.component';

@Component({
    selector: 'app-kill',
    templateUrl: './kill.component.html',
    styleUrls: ['./kill.component.scss']
})
export class KillComponent extends BaseComponent {
    constructor(store: Store) { 
        super(store);         
        console.log("?");
        this.addComponentString(
            [
                'SUBJECT: SINOPOLI',
                'STATUS: OBSERVATION TERMINATED',
                'POSTMORTEM: Subject killed by current user.'
            ])
    };
}