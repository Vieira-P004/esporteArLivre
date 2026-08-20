import { Routes } from '@angular/router';


import { AtletaComponent } from './component/atleta-component/atleta-component';
import { HomeComponent } from './component/home-component/home-component';
import { CorridaComponent } from './component/corrida/corrida-component/corrida-component';
import { ListarCorrida } from './component/listar-corrida/listar-corrida';

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
    },
    {
        path:"cadastroCorrida",
        component:CorridaComponent
    },
    {
        path:"listarCorrida",
        component:ListarCorrida
    }
];
