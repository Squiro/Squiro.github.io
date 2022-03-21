import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/shared/components/base-component/base.component';
import { Store } from '@ngxs/store';
import { GeneralState } from '../../store/general/general.state';
import { takeUntil, filter } from 'rxjs';

@Component({
    selector: 'app-error',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.scss']
})
export class ErrorComponent extends BaseComponent {

    constructor(store: Store) { 
        super(store);        
        this.store.select(GeneralState.error).pipe(takeUntil(this.unsubscribeAll), filter((r) => r != null)).subscribe((r) => 
            { 
                // this.componentStrings = []; 
                this.addComponentString([r]);
            }
        );        
    }    
}
