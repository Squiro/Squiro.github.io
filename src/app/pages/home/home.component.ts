import { AfterContentInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngxs/store';
import { ComponentInjectionDirective } from 'src/app/shared/directives/component.injection.directive';
import { DirectoriesActions } from 'src/app/store/directories/directories.actions';
import { directoriesList } from 'src/app/store/directories/directories.fakeapi';
import { BaseComponent } from '../../shared/components/base-component/base.component';
import { generateDirectories } from '../../store/directories/directories.fakeapi';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent extends BaseComponent implements OnInit, AfterContentInit {   

    @ViewChild(ComponentInjectionDirective, {static: true}) componentInjection!: ComponentInjectionDirective;

    constructor(store: Store)
    { 
        super(store);
        generateDirectories();
        this.addComponentString(['Home', 'Use help, h, or ? to see a list of available commands', '--> USE startx TO START GUI!!!!! <--']);
        this.store.dispatch(new DirectoriesActions.SetCurrent(directoriesList[0]));
    }

    async loadComponent(componenType: any): Promise<void> {   
        const viewContainerRef = this.componentInjection.viewContainerRef;
        if (typeof componenType == 'string')
        {
            if ((componenType as string) == 'clear')
            {
                viewContainerRef.clear();
                return;
            }
        }        
        viewContainerRef.createComponent<typeof componenType>(componenType);  
    }
}
