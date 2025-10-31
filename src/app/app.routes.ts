import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';

export const routes: Routes = [
  { path: '', component: MainComponent, title: 'HOME' },
  {
    path: 'individual',
    loadComponent: () =>
      import('./pages/individual/individual.component').then(
        (m) => m.INDIVIDUALComponent
      ),
    title: 'INDIVIDUAL',
  },
  {
    path: 'our-services',
    loadComponent: () =>
      import(
        './pages/services/components/our-services/our-services.component'
      ).then((m) => m.OurServicesComponent),
    title: 'Our Services ',
  },
  {
    path: 'services/:id',
    loadComponent: () =>
      import(
        './pages/services/components/service-details/service-details.component'
      ).then((m) => m.ServiceDetailsComponent),
  },
];
