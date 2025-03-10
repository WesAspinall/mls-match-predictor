import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './ui/page-not-found/page-not-found.component';
import { TeamsComponent } from './teams/teams.component';

export const routes: Routes = [
    {
        path: '',
        component: TeamsComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];
