import { IDirectory } from '../../core/interfaces/directory.interface';
export let directoriesList: IDirectory[] = [];

export function generateDirectories() {
    const root: IDirectory = {
        id: 'home',
        directories: [],
    };

    const projects = { id: 'projects', parent: root, directories: [] };
    projects.directories.push(...[
        {
            id: 'programming',
            parent: projects,
        },
        // {
        //     id: 'automation',
        //     parent: projects,
        // },
        {
            id: 'arduino',
            parent: projects,
        },
        {
            id: 'games',
            parent: projects,
        },
    ]);
    
    root.directories.push(
        ...[ 
            { id: 'about-me', parent: root }, 
            { id: 'experience', parent: root }, 
            { id: 'education', parent: root },
            projects
        ]
    );

    directoriesList.push(root);

}