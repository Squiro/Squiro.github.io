export interface IDirectory {
    id: string;
    parent?: IDirectory;
    // level: number;
    directories?: IDirectory[];
}