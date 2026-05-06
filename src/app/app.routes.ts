import { Routes } from '@angular/router';
import { ContactList } from './pages/contact-list/contact-list';
import { ContactCard } from './pages/contact-card/contact-card';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'contact-list'
    },
    {
        path:"contact-list",
        component: ContactList
    },
    {
        path:"contact-card",
        component: ContactCard
    },
    {
        path: '**',
        redirectTo: 'contact-list'
    }
];
