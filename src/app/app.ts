import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AtletaComponent } from '../app/component/atleta/atleta-component/atleta-component';
import { MenuComponent } from './component/menu-component/menu-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent, AtletaComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('esporteArLivre');
}
