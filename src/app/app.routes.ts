import { Routes } from '@angular/router';
import { WorkComponent } from './work/work.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent, data: { animation: 'About' } },
  { path: 'work', component: WorkComponent, data: { animation: 'Work' } },
];
