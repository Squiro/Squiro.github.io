import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { IDirectory } from '../../core/interfaces/directory.interface';
import { DirectoriesActions } from './directories.actions';
import { directoriesList } from './directories.fakeapi';

export class DirectoriesStateModel {
    list: IDirectory[];
    current: IDirectory;
    dirDoesntExist: string;
}

@State<DirectoriesStateModel>({
    name: 'directories',
    defaults: {
        list: null,
        current: null,        
        dirDoesntExist: null,
    }
})

@Injectable()
export class DirectoriesState {

    @Selector()
    static current(state: DirectoriesStateModel): IDirectory {
        return state.current;
    }   

    @Selector()
    static list(state: DirectoriesStateModel): IDirectory[] {
        return state.current.directories;
    }  
    
    @Selector()
    static dirDoesntExist(state: DirectoriesStateModel): string {
        return state.dirDoesntExist;
    }   

    @Action(DirectoriesActions.SetCurrent)
    setCurrent(ctx: StateContext<DirectoriesStateModel>, action: DirectoriesActions.SetCurrent): void
    {        
        ctx.patchState({ current: action.current });
    }
    
    @Action(DirectoriesActions.GoToParent)
    goToParent(ctx: StateContext<DirectoriesStateModel>, action: DirectoriesActions.GoToParent): void
    {        
        const parent = ctx.getState().current.parent;
   
        ctx.patchState({ current: parent || ctx.getState().current });
    }

    @Action(DirectoriesActions.SearchDirectory)
    searchDirectory(ctx: StateContext<DirectoriesStateModel>, action: DirectoriesActions.SearchDirectory): void
    {
        this.parseRoute(action.path, ctx);

    }

    parseRoute(path: string, ctx: StateContext<DirectoriesStateModel>): void {
        const dirs = path.split('/').filter(element => element);;

        let searchIn = directoriesList[0].directories;
        let found;
        for (let i = 0; i < dirs.length; i++)
        {
            found = searchIn.find((d) => d.id == dirs[i]);
            if (!found) 
            {
                if (ctx.getState().dirDoesntExist == path)            
                    ctx.patchState({ dirDoesntExist: path + ' ' });
                else 
                    ctx.patchState({ dirDoesntExist: path });               
                break;
            }
            searchIn = found.directories;
        }
        ctx.patchState({ current: found });
    }


}


