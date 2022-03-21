import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../shared/components/base-component/base.component';
import { Store } from '@ngxs/store';
import { DirectoriesState } from '../../store/directories/directories.state';
import { filter, takeUntil } from 'rxjs';
import { IDirectory } from '../../core/interfaces/directory.interface';

@Component({
    selector: 'app-directories',
    templateUrl: './directories.component.html',
    styleUrls: ['./directories.component.scss']
})
export class DirectoriesComponent extends BaseComponent {    
    dirs: IDirectory[] = [];
    constructor(store: Store) { 
        super(store);        
        this.store.select(DirectoriesState.list).pipe(takeUntil(this.unsubscribeAll), filter((r) => r != null)).subscribe((r) => 
            {                
                this.dirs = r;
                this.dirs.forEach((d) => {
                    this.addComponentString([`drwxr-xr-x 5 ${d.id}`]);                    
                })
            }
        );
    }

}
