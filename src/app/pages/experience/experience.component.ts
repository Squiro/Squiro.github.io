import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { BaseComponent } from '../../shared/components/base-component/base.component';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent extends BaseComponent {
    constructor(store: Store) { 
        super(store);         
        this.addComponentString(
            [
                '=== Work experience ===', 
                'I have 2+ years of experience developing of apps, web platforms, and IT solutions for a variety of clients (both from Argentina and other countries).',
                'Aside of programming, these are some of the key things I do:',
                '• Extraction of requirements from clients and requirement analysis for each project.',
                '• Deployment of web sites and applications: configuration of Linux servers, domains/DNS managment, among other similar tasks.',
                '• Direct communication and interaction with my clients.',

                `Over the years I've been working as a freelance FullStack Developer, I developed and completed various projects.`,
                'Instead of listing each one of them, I will list the key major things that I achieved/learned while working on them:',
                '• Learning how to develop (from scratch!) on Angular',
                '• Making REST APIs',
                '• Implementing Server Side Rendering with Angular Universal',
                '• Search Engine Optimization',
                '• Platform deployment and configuration on Linux-based servers.',
                '• Configuring of apache/nginx.',
                '• Implmenting SSL certificates.',
                '• Implementing an email server based on Postfix, Dovecot, and using SMTP Relays (also includes learning about DMARC, DKIM)',
                '• DNS Managment.',
                `• Payment system implementation using Mercado Pago's SDK.`,
                '• CI/CD pipelines to automate deployment.',
                '• Automated invoice generation through a web bot developed using the Selenium framework.',
                `• Implementing web functions on Firebase.`,
                `• Used the Firebase Realtime Database.`,
                `• Implementing a system that is able to export the pentesting reports into a Microsoft Word document, including images, styles, formats, etc.`,
                `• Modified Moodle’s source code in order to satisfy with specific requirements on the front-end.`,
                `• Migrated a MySQL database to a Postgres one, converting datatypes to ensure compatibility.`,

                `=== Academic Researcher ===`,
                `I became a member of an investigation and research project from my university (Universidad Nacional de La Matanza).`,
                `The project involved Machine Learning and Data Science. It's goal was applying Data Science to diagnose patients with Parkinson’s disease.`,                
                `• I developed prediction models based on convolutional neural networks in order to diagnose patients with Parkinson's disease. The models were fed spectrograms generated through audio samples of patients speech.`,
                `• Created Python scripts that automate the generation of spectrograms and preprocessing of audio signals.`,
                `• Partook on a multidisciplinary research and exploration of various fields (Data Science, Machine Learning, Speech Processing, Health).`,
                `• Interacted with professionals and academics of these fields.`,
                `• Utilized Tensorflow and Keras.`,

                '=== Programming languages ===', 
                'Currently focused on Typescript and Javascript, but I also have experience and made projects with:',
                '• Typescript & Javascript',
                '• Java',
                '• C#',
                '• C',
                '• Python',
                '• PHP',
                '• SQL',     

                '=== Web related technologies (frameworks, libraries, cloud) ===',
                '• Node.js',                
                '• NestJS',
                '• Angular / Angular Universal',
                '• NGRX/NGXS (state managment)',
                '• Vue',
                '• Laravel',
                '• Firebase',

                '=== Dev tools ===',
                '• Git',
                '• Docker',
                '• CI/CD',

                '=== Other ==='                ,
                'I made some projects, (such as videogames, or bots to automate stuff) using the following:',
                '• Electron',
                '• Arduino',
                '• Unity',
                '• Phaser',
                '• Selenium',
            ])
    }    
}
