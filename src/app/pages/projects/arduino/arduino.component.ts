import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { BaseComponent } from 'src/app/shared/components/base-component/base.component';


@Component({
    selector: 'app-arduino',
    templateUrl: './arduino.component.html',
    styleUrls: ['./arduino.component.scss']
})
export class ArduinoComponent extends BaseComponent {
    hide: boolean;
    constructor(store: Store) { 
        super(store);         
        this.hide = true;
        this.addComponentString(
            [ 
                '=== Arduino Sentry ===',
                'Arduino Sentry is an project that aims to replicate the behaviour of a Sentry Turret (inspired by the Valve games such as TF2/Portal).',  
                'The sentry is able to detect and track movements of life-beings. For this, it uses both an ultrasonic and infrared sensors.',  
                `Aside from hardware, a higlight of this project's code is the inclusion of a state-machine. The code cycles through states in order to mimic the behaviour of a turret.`,  
                'You can check it out here: ',
                'https://github.com/Squiro/arduino-sentry',
                'And here is a cool picture of the prototype we built: ',
                ':)'
            ])
    }    

    checkLength(): boolean
    {
        if (this.componentStrings[8].display.length == this.componentStrings[8].content.length)
        {
            this.hide = false;
            return true;
        }
        return false;
    }
}
