import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Layout } from './theme/layout/layout';
import { CpasPage } from './pages/cpas-page/cpas-page';
import { CpasInfo } from './pages/cpas-info/cpas-info';
import { JustArrived } from './pages/just-arrived/just-arrived';
import { ActirisVdab } from './pages/actiris-vdab/actiris-vdab';
import { SelectedCpas } from './pages/selected-cpas/selected-cpas';
import { CreateMailCpas } from './pages/create-mail-cpas/create-mail-cpas';
import { ImportantContacts } from './pages/important-contacts/important-contacts';
import { ActirisMailPage } from './pages/actiris-mail-page/actiris-mail-page';
import { FindHouse } from './pages/find-house/find-house';
import { PrivacyPolicy } from './pages/privacy-policy';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    data: { breadcrumbKey: 'NAV.ROOT', hideBreadcrumb: true },
    children: [
      { path: '', component: Home, data: { breadcrumbKey: 'NAV.HOME' } },
      {
        path: 'cpas',
        component: CpasPage,
        data: { breadcrumbKey: 'NAV.CPAS' },
      },
      {
        path: 'cpas/:id',
        component: SelectedCpas,
        data: {
          breadcrumbKey: 'NAV.CPAS_DETAIL',
          parent: { key: 'NAV.CPAS', path: '/cpas' },
        },
      },
      {
        path: 'cpas-info',
        component: CpasInfo,
        data: {
          breadcrumbKey: 'NAV.CPAS_INFO',
          parent: { key: 'NAV.CPAS', path: '/cpas' },
        },
      },
      {
        path: 'letter-creation',
        component: CreateMailCpas,
        data: {
          breadcrumbKey: 'NAV.CPAS_LETTER',
          parent: { key: 'NAV.CPAS', path: '/cpas' },
        },
      },
      {
        path: 'actiris-letter-creation',
        component: CreateMailCpas,
        data: {
          breadcrumbKey: 'NAV.ACTIRIS_LETTER',
          parent: { key: 'NAV.EMPLOYMENT', path: '/labor-exchange' },
        },
      },
      
      {
        path: 'important-contacts',
        component: ImportantContacts,
        data: { breadcrumbKey: 'NAV.CONTACTS' },
      },
      {
        path: 'just-arrived',
        component: JustArrived,
        data: { breadcrumbKey: 'NAV.NEWCOMER' },
      },
      {
        path: 'labor-exchange',
        component: ActirisVdab,
        data: { breadcrumbKey: 'NAV.EMPLOYMENT' },
      },
      {
        path: 'find-apartaments',
        component: FindHouse,
        data: { breadcrumbKey: 'NAV.EMPLOYMENT' },
      },
      { path: 'privacy-policy', component: PrivacyPolicy },
    ],
  },
];
