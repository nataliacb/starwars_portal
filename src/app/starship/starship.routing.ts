import { Routes, RouterModule } from '@angular/router';

import { StarshipComponent } from './starship.component';
import { StarshipDetailComponent} from "./detail/starship.detail.component";

const starshipRoutes: Routes = [
  { path: 'starships', component: StarshipComponent  },
  { path: 'starships/:id', component: StarshipDetailComponent}
];

export const starshipsRouting = RouterModule.forChild(starshipRoutes);