// import { Routes } from '@angular/router';

// export const routes: Routes = [];

import { Routes } from '@angular/router';
import { Home } from './componentes/home/home';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: '**',
        redirectTo: ''
    }
];

