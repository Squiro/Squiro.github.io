import { IDirectory } from '../../core/interfaces/directory.interface';

// tslint:disable-next-line: no-namespace
export namespace DirectoriesActions {
    export class SetCurrent {
        static readonly type = '[Directories] SetCurrent';
        constructor(public current: IDirectory) {}
    }

    export class GoToParent {
        static readonly type = '[Directories] GoToParent';
        constructor() {}
    }

    export class SearchDirectory {
        static readonly type = '[Directories] SearchDirectory';
        constructor(public path: string) {}
    }
    
    
}