import { AfterContentInit, Component, OnDestroy, OnInit } from '@angular/core';
import { filter, Subject, takeUntil } from 'rxjs';
import { IComponentStrings } from 'src/app/core/interfaces/component-strings.interface';
import { Store } from '@ngxs/store';
import { GeneralState } from '../../../store/general/general.state';

@Component({
    selector: 'app-base',
    template: '',
})
export class BaseComponent implements OnInit, OnDestroy, AfterContentInit {
    public componentStrings: IComponentStrings[] = [];
    public store: Store;
    protected unsubscribeAll: Subject<void>;
    constructor(store: Store) { 
        this.unsubscribeAll = new Subject();
        this.store = store;
        this.store.selectOnce(GeneralState.command).pipe(takeUntil(this.unsubscribeAll), filter((r) => r != null)).subscribe((r) => {
            this.componentStrings.push({ content: `root: ${r}` , display: ''});
        });
    }

    ngOnInit(): void {
        
    }

    ngOnDestroy(): void {
        this.unsubscribeAll.next();
        this.unsubscribeAll.complete();
    }


    ngAfterContentInit(): void {
        this.printSequentially();
    }
    
    addComponentString(contents: string[]): void {
        for (const c of contents)
            this.componentStrings.push({ content: c, display: '' });
    }

    async printSequentially(): Promise<void> {
        for (const c of this.componentStrings) 
        {            
            for (let i = 0; i < c.content.length; i++) {
                await new Promise(function(resolve) {
                    setTimeout(resolve, 25);
                    c.display += c.content.charAt(i);
                });                 
              } 
        }
    }
}
