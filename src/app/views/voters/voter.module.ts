import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListComponent } from './list/list.component';
import { VoterComponent } from './voter/voter.component';
import { SearchComponent } from './components/search/search.component';
import { VoterListComponent } from './components/voter-list/voter-list.component';

const routes: Routes = [
    {
        path: '',
        component: ListComponent,
    },
    {
        path: ':id',
        component: VoterComponent,
    }    
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
    ],
    declarations: [VoterComponent, ListComponent, SearchComponent, VoterListComponent],
})
export class VoterModule { }
