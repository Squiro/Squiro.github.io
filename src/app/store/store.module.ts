
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { DirectoriesStoreModule } from './directories/directories.store.module';
import { GeneralStoreModule } from './general/general.store.module';



@NgModule({
    imports  : [
        NgxsModule.forRoot([], {
            developmentMode: !environment.production
        }),
        DirectoriesStoreModule,
        GeneralStoreModule,
    ],    
})

export class AppStoreModule {
}
