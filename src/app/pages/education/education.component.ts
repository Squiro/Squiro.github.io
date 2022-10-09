import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../shared/components/base-component/base.component';
import { Store } from '@ngxs/store';

@Component({
    selector: 'app-education',
    templateUrl: './education.component.html',
    styleUrls: ['./education.component.scss']
})
export class EducationComponent extends BaseComponent {
    constructor(store: Store) { 
        super(store); 
        this.addComponentString(
            [
                '=== UNIVERSITY ===',                 
                'Degree: Computer Science Engineer (five years)',
                'Institution: Universidad Nacional de La Matanza (Argentina, Buenos Aires)',
                'Program:',  
                'https://ingenieria.unlam.edu.ar/index.php?seccion=3&idArticulo=30',  
                'Start year: 2017',                 
                'Graduation year: 2022 (soon!)',                 
                'Completed subjects to date: 42/44',
                'Average grade to date: 8,26',
                '=== HIGH SCHOOL ===',  
                'Degree: IT Technician',
                'Institution: Instituto Técnico Industrial San Judas Tadeo (Argentina, Buenos Aires)',
                'Start year: 2013',                 
                'Graduation year: 2016',  
                'Final average grade: 9,15'               

            ])
    }    
}
