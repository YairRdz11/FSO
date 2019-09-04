import { IndexComponent } from './components/index/index.component';
import { RouterModule, Routes } from '@angular/router';

// import {
//   ContactComponent
// }  from './components/index.paginas';

const app_routes: Routes = [
  { path: 'home', component:  IndexComponent},
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const app_routing = RouterModule.forRoot(app_routes, {useHash: true});
