import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { BaseComponent } from 'src/app/shared/components/base-component/base.component';


@Component({
    selector: 'app-programming',
    templateUrl: './programming.component.html',
    styleUrls: ['./programming.component.scss']
})
export class ProgrammingComponent extends BaseComponent {
    constructor(store: Store) { 
        super(store);         
        this.addComponentString(
            [ 
                '=== Code Compiler ===',
                'A code compiler for a custom-made language. It is based on Java, using JFLEX and CUP/JCUP as lexers and parsers respectively.',  
                'The laguange, despite being "simple", supports IF, ELSE, WHILE, INLIST, and other operations, including writing to and reading variables.',      
                'This project was made as an assigment for the <Compilers and Languagers> subject of my University.',       
                'You can check the project repo at Github: ', 
                'https://github.com/Squiro/compilador',
                '=== SABER desktop application ===',
                'This repo contains a desktop applications that makes use of SABER, a post-quantum cryptographic algorithm based on lattices.',                
                'https://www.esat.kuleuven.be/cosic/pqcrypto/saber/',
                'The app allows you to cipher files using the algorithm. It was built using Electron and Angular, and it runs on Windows.',
                `It uses the implementation made by the official SABER team that is available at: `,
                'https://github.com/KULeuven-COSIC/SABER',
                'A cross-compiling process had to be made to make this code run on Windows. It was painful.',
                '=== droidAmp ===',
                'droidAmp is a music application that runs natively on Android.',
                'It uses smartphone sensors (such as the proximity sensor) to perfom actions (increase/decrease volume, play/pause, next track).',
                'The application also makes calls to an API and has an access-token/refresh-token logic implemented.',                
                'Made completely on Android Studio using Java.',
                'Repo: ',
                'https://github.com/Squiro/droidAmp',
                '=== Misc Stuff ===',
                'These are repositories that contains code of excersises/examns from my University.', 
                '--> Operative Systems:',
                'Repo:',
                'https://github.com/Squiro/sistemas-operativos/tree/master/Trabajos%20Pr%C3%A1cticos%20-%20GitHub',
                'TP1 folder contains bash exercises.',
                'TP2 folder contains Powershell exercises.',
                'TP3 folder contains C exercises that involve using pipes or sockets.',
                '--> Programming:',
                'These two repositories contain programming excersises.',
                'The first one is focused on the C language and data structures.',
                'Second one is mostly Java, focuses on OOP, computational complexity, and graph theory.',
                '• ',
                'https://github.com/Squiro/progra-unlam',
                '• ',
                'https://github.com/Squiro/progra-avanzada-unlam'
            ])
    }    
}
