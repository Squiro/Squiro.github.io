import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { GeneralState } from './general.state';

@NgModule({
    declarations: [],
    imports: [ 
        CommonModule,
        NgxsModule.forFeature([GeneralState])
    ],
    exports: [],
})
export class GeneralStoreModule {}
