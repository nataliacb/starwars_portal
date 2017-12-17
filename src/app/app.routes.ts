import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

const appRoutes: Routes  = [
    { path: '', component: HomeComponent, pathMatch: 'full'},
];

export const routing = RouterModule.forRoot(appRoutes);