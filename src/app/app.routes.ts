import { Routes } from '@angular/router';


import { AtletaComponent } from './component/atleta-component/atleta-component';
import { HomeComponent } from './component/home-component/home-component';

export const routes: Routes = [
    {
        //joga para página inicial se a url ficar vazia
        path:'',
        redirectTo:"/home",
        pathMatch: 'full'
    },
    {
        path:"home",
        component: HomeComponent
    },
    {
        path:"cadastroAtleta",
        component:AtletaComponent
    }
];
