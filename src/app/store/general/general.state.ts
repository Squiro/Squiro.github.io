import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { GeneralActions } from './general.actions';


export class GeneralStateModel {
    command: string;
    error: string;
}

@State<GeneralStateModel>({
    name: 'general',
    defaults: {
        command: null,  
        error: null,      
    }
})

@Injectable()
export class GeneralState {

    @Selector()
    static command(state: GeneralStateModel): string {
        return state.command;
    }   

    @Selector()
    static error(state: GeneralStateModel): string {
        return state.error;
    }   

    @Action(GeneralActions.SetCurrentCommand)
    setCurrent(ctx: StateContext<GeneralStateModel>, action: GeneralActions.SetCurrentCommand): void
    {        
        
        ctx.patchState({ command: action.command });
    }

    @Action(GeneralActions.SetCurrentError)
    setCurrentError(ctx: StateContext<GeneralStateModel>, action: GeneralActions.SetCurrentError): void
    {        
        if (action.error == ctx.getState().error)
            action.error += ' ';
        ctx.patchState({ error: action.error });
    }
}


