import { Component, EventEmitter, OnInit, Output, Type, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { HelpComponent } from '../../../pages/help/help.component';
import { DirectoriesComponent } from '../../../pages/directories/directories.component';
import { Store } from '@ngxs/store';
import { DirectoriesActions } from 'src/app/store/directories/directories.actions';
import { ErrorComponent } from '../../../pages/error/error.component';
import { GeneralActions } from 'src/app/store/general/general.actions';
import { takeUntil, Subject, filter } from 'rxjs';
import { DirectoriesState } from '../../../store/directories/directories.state';
import { HomeComponent } from '../../../pages/home/home.component';
import { AboutMeComponent } from '../../../pages/about-me/about-me.component';
import { ExperienceComponent } from '../../../pages/experience/experience.component';
import { GeneralState } from '../../../store/general/general.state';
import { EducationComponent } from 'src/app/pages/education/education.component';
import { KillComponent } from '../../../pages/kill/kill.component';
import { ProgrammingComponent } from 'src/app/pages/projects/programming/programming.component';
import { ArduinoComponent } from 'src/app/pages/projects/arduino/arduino.component';
import { GamesComponent } from 'src/app/pages/projects/games/games.component';

@Component({
    selector: 'app-prompt',
    templateUrl: './prompt.component.html',
    styleUrls: ['./prompt.component.scss']
})
export class PromptComponent implements OnInit, OnDestroy {
    dirComponentMap: Record<string, Type<any>>;
    currentDir: string;
    input: string;
    unsubscribeAll: Subject<void>;

    @ViewChild('prompt') prompt: ElementRef;
    
    @Output()
    componentType = new EventEmitter<Type<any> | string>();

    constructor(private store: Store) {
        this.input = "";
        this.currentDir = "home";
        this.unsubscribeAll = new Subject();

        this.dirComponentMap = {
            'about-me': AboutMeComponent,
            'experience': ExperienceComponent,
            'education': EducationComponent,
            'programming': ProgrammingComponent,
            'arduino': ArduinoComponent,
            'games': GamesComponent
            // 'automation': ExperienceComponent,

        }
    }

    ngOnInit(): void {
        this.store.select(DirectoriesState.dirDoesntExist).pipe(takeUntil(this.unsubscribeAll)).subscribe((r) => {
            if (r)
            {               
                // This will only fire once is the string is the same because the objects doesnt mutate
                this.store.dispatch(new GeneralActions.SetCurrentError(`-gOS: ${r}: No such file or directory`));                   
            }
        });

        this.store.select(DirectoriesState.current).pipe(takeUntil(this.unsubscribeAll), filter((r) => r != null)).subscribe((r) => {
            if (this.currentDir != r.id)
            {
                this.currentDir = r.id;
                if (this.dirComponentMap[r.id])
                    this.componentType.emit(this.dirComponentMap[r.id]);       
                else 
                    // This is out of laziness, should rename it to SetCurrentMessage
                    this.store.dispatch(new GeneralActions.SetCurrentError(''));          
            }          
        });

        this.store.select(GeneralState.error).pipe(takeUntil(this.unsubscribeAll), filter((r) => r != null)).subscribe((r) => {
            this.componentType.emit(ErrorComponent); 
        });
    }

    ngOnDestroy(): void {        
        this.unsubscribeAll.next();
        this.unsubscribeAll.complete();
    }

    handleInput(): void {
        const trim = this.input.trim();
        const splitInput = trim.split(" ");
        
        this.store.dispatch(new GeneralActions.SetCurrentCommand(trim));

        switch(splitInput[0]) {
            case 'help':
            case 'h':
            case '?':                
                this.componentType.emit(HelpComponent);
                break;
            case 'clear':
                this.componentType.emit('clear');
                break;
            case 'ls':
                this.componentType.emit(DirectoriesComponent);
                break;
            case 'cd':
                if (splitInput[1] == "..") {
                    this.store.dispatch(new DirectoriesActions.GoToParent());
                } else {
                    this.store.dispatch(new DirectoriesActions.SearchDirectory(splitInput[1]));
                }                
                break;
            case 'show':
                if (this.currentDir != 'home')
                    this.componentType.emit(this.dirComponentMap[this.currentDir]);
                break;
            case 'kill':                
                this.componentType.emit(KillComponent);
                break;
            default:             
                this.store.dispatch(new GeneralActions.SetCurrentError(`-gOS: ${splitInput[0]}: command not found`));
                // this.componentType.emit(ErrorComponent);
                break;
        }

        this.input = "";        
        this.prompt.nativeElement.scrollTop = this.prompt.nativeElement.scrollHeight;
    }
}
