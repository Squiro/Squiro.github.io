
// tslint:disable-next-line: no-namespace
export namespace GeneralActions {
    export class SetCurrentCommand {
        static readonly type = '[General] SetCurrentCommand';
        constructor(public command: string) {}
    }  
    
    export class SetCurrentError {
        static readonly type = '[General] SetCurrentError';
        constructor(public error: string) {}
    }  
}