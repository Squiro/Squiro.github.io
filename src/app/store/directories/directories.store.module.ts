import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { DirectoriesState } from './directories.state';

@NgModule({
    declarations: [],
    imports: [ 
        CommonModule,
        NgxsModule.forFeature([DirectoriesState])
    ],
    exports: [],
})
export class DirectoriesStoreModule {}
