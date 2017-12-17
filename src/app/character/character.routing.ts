import { Routes, RouterModule } from '@angular/router';

import { CharacterComponent } from './character.component';
import { DetailComponent} from "./detail/detail.component";

const characterRoutes: Routes = [
  { path: 'characters', component: CharacterComponent },
  { path: 'characters/:id', component: DetailComponent}
];

export const charactersRouting = RouterModule.forChild(characterRoutes);