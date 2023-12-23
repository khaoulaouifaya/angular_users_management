import { Component ,ViewEncapsulation} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule , NgSelectModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {
  items = [
    { id: 1, name: 'Frensh', image: '../assets/img/france.png' },
    { id: 2, name: 'English', image: '../assets/img/usaf.png' },
  ];
  selectedItem = this.items[0];
}
